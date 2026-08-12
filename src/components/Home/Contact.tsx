import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

export default function Contact(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={clsx(styles.section, styles.contactSection, visible && styles.revealed)}>
      <div className={clsx('container', styles.contactInner)}>
        <Heading as="h2" className={styles.sectionTitle}>
          联系我
        </Heading>
        <p className={styles.sectionLead}>扫码添加微信</p>
        <img
          className={styles.wechatQr}
          src="/img/wechat-qr.jpg"
          alt="微信二维码"
          width={280}
          height={416}
          loading="lazy"
        />
      </div>
    </section>
  );
}
