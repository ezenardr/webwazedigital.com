import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.facebook.com/webwazedigital/" className="cs-center">
        <Icon icon="gg:facebook" />
      </Link>
      <Link href="https://www.instagram.com/webwazedigital/" className="cs-center">
        <Icon icon="mdi:instagram" />
      </Link>
      <Link href="/" className="cs-center">
        <Icon icon="ic:baseline-whatsapp" />
      </Link>
      <Link href="mailto:contact@webwazedigital.com" className="cs-center">
        <Icon icon="fluent:mail-24-filled" />
      </Link>
    </Div>
  );
}
