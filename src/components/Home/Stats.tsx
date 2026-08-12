import type {ReactNode} from 'react';
import clsx from 'clsx';
import {stats, statsDisplayOverride} from '@site/src/data/profile';
import {useCountUp} from './useCountUp';
import {useReveal} from './useReveal';
import styles from './styles.module.css';

function Stat({
  index,
  label,
  value,
  suffix,
  active,
}: {
  index: number;
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}): ReactNode {
  const counted = useCountUp(value, active);
  const override = statsDisplayOverride[index];

  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        {override ?? (
          <>
            {counted}
            <span className={styles.statSuffix}>{suffix}</span>
          </>
        )}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Stats(): ReactNode {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={clsx(styles.section, styles.statsSection, visible && styles.revealed)}
      aria-label="关键数字">
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <Stat
              key={item.label}
              index={index}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              active={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
