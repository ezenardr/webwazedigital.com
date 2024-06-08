import {Icon} from '@iconify/react';
import Head from 'next/head';
import React from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';
import {useForm} from "react-hook-form"
import {toast} from "sonner"

export default function Contact() {
    const {register, handleSubmit, reset, formState:{isSubmitting}} = useForm();

    function submitHandler(data) {
        if (!data.email || !data.name) {
            toast.error("Champ vide");
        }
        if(data.email || data.name){
            fetch('/api/contacts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json"
                }
            }).then(response => toast.success("Email sent successfully.")).then(res=>reset()).catch(err => toast.error(err));
        }

    }

    return (
        <>
            <Head>
                <title>Contact - Web Waze Digital</title>
                <meta name="description"
                      content="Contactez-nous dès aujourd'hui pour démarrer votre projet digital. Ensemble, créons une présence en ligne qui vous démarquera."/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Layout>
                <PageHeading
                    title="Nous Contactez"
                    bgSrc="/images/contact_hero_bg.jpeg"
                    pageLinkText="Contact"
                />
                <Spacing lg="150" md="80"/>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-lg-6">
                            <SectionHeading
                                title="Vous avez un projet en tête ?"
                                subtitle="Contactez Nous"
                            />
                            <Spacing lg="55" md="30"/>
                            <ContactInfoWidget withIcon/>
                            <Spacing lg="0" md="50"/>
                        </Div>
                        <Div className="col-lg-6">
                            <form className="row" onSubmit={handleSubmit(submitHandler)}>
                                <Div className="col-sm-6">
                                    <label className="cs-primary_color">Nom Complet</label>
                                    <input type="text" {...register("name")} className="cs-form_field"/>
                                    <Spacing lg="20" md="20"/>
                                </Div>
                                <Div className="col-sm-6">
                                    <label className="cs-primary_color">Email</label>
                                    <input type="email" {...register("email")} className="cs-form_field"/>
                                    <Spacing lg="20" md="20"/>
                                </Div>
                                <Div className="col-sm-6">
                                    <label className="cs-primary_color">Type de Project</label>
                                    <input type="text" {...register("type")} className="cs-form_field"/>
                                    <Spacing lg="20" md="20"/>
                                </Div>
                                <Div className="col-sm-6">
                                    <label className="cs-primary_color">Téléphone</label>
                                    <input type="phone" {...register("phone")} className="cs-form_field"/>
                                    <Spacing lg="20" md="20"/>
                                </Div>
                                <Div className="col-sm-12">
                                    <label className="cs-primary_color">Description Du Projet</label>
                                    <textarea
                                        cols="30"
                                        rows="7"
                                        className="cs-form_field"
                                        {...register("description")}
                                    ></textarea>
                                    <Spacing lg="25" md="25"/>
                                </Div>
                                <Div className="col-sm-12">
                                    <button className="cs-btn cs-style1" type={"submit"} disabled={isSubmitting}>
                                        <span>Send Message</span>
                                        <Icon icon="bi:arrow-right"/>
                                    </button>
                                </Div>
                            </form>
                        </Div>
                    </Div>
                </Div>
            </Layout>
        </>
    );
}
