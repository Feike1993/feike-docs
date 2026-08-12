export const profile = {
  brand: 'Feike',
  title: '资深 Java 开发 · 微服务 / 高并发',
  tagline: '主导日处理 1 亿+ 条数据的高并发平台 0-1 架构设计与落地',
} as const;

export type StatItem = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: StatItem[] = [
  {label: '后端架构经验', value: 10, suffix: ' 年'},
  {label: '日均数据处理', value: 1, suffix: ' 亿+'},
  {label: '设备并发接入', value: 2000, suffix: '+'},
  {label: '项目管理认证', value: 1, suffix: ' PMP'},
];

/** Special display for stats that shouldn't animate as plain numbers */
export const statsDisplayOverride: Record<number, string> = {
  3: 'PMP',
};

export const strengths: string[] = [
  '10 年 Java 后端架构经验，主导日处理 1 亿+ 条数据的高并发平台 0-1 落地',
  '熟练掌握 Spring Boot 3、Spring Cloud Alibaba，具备集群部署与服务治理实践',
  '推动 Java + AI 融合，完成知识库向量检索与 AI 接口高并发集成',
  'PMP 认证，可独立负责系统架构与技术方案，具备跨团队交付经验',
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: '核心框架',
    items: [
      'Spring Boot 3',
      'Spring Cloud Alibaba',
      'MyBatis-Plus',
      'Gateway',
      'EasyExcel',
    ],
  },
  {
    category: '微服务 / 治理',
    items: ['Nacos', 'Sentinel', 'Seata', 'APISIX', 'OpenFeign', 'gRPC'],
  },
  {
    category: '中间件 / 消息',
    items: ['Kafka', 'RabbitMQ', 'Redis', 'MQTT 5.0', 'XXL-JOB'],
  },
  {
    category: '大数据 / 分析',
    items: ['Flink', 'Doris', 'HBase', 'Hive'],
  },
  {
    category: 'AI 工程化',
    items: ['知识库对接', '向量化同步', '语义检索', '高并发 AI 集成'],
  },
  {
    category: '部署与运维',
    items: ['Linux', 'Docker', '集群搭建', '性能监控'],
  },
];

export type ProjectItem = {
  name: string;
  role: string;
  period: string;
  background: string;
  responsibility: string;
  works: string[];
  outcome: string;
};

export const projects: ProjectItem[] = [
  {
    name: 'IPD 研发管理',
    role: '项目负责人',
    period: '2022.10 - 至今',
    background:
      '解决研发管理流程混乱、权限不清、数据孤岛问题，打造企业级研发数字化管理平台。',
    responsibility:
      '负责系统架构、核心功能开发、权限体系、跨系统集成与全流程迭代落地，带领团队完成系统从 0 到 1 建设与持续迭代。',
    works: [
      '搭建 Spring Boot 3 + Spring Cloud Alibaba 微服务架构，覆盖项目管理、任务管理等核心功能，持续迭代 4 年。',
      '设计全维度权限体系（菜单 / 按钮 / 行级 / 列级），通过 OpenFeign 调用外部权限中心实现运行时动态判定，保障数据安全与合规。',
      '针对 10+ 审批类型（研发变更、物料申请、质量评审）设计 FlowCallbackFactory + 策略模式，按业务类型动态路由至对应策略，新增审批流程仅需新增策略类即插即用，交付周期缩短 60%。',
      '集成钉钉机器人，实现移动端即时消息推送、审批通知与智能交互。',
      '基于 Redis Lua 脚本实现 @Idempotent 幂等注解，结合 SpEL 动态解析幂等键，有效防止表单重复提交。',
      '多数据源混合技术实践：同时操作 Oracle、SQL Server、PostgreSQL 三个数据库，通过动态数据源路由实现业务解耦。',
      '实现 EasyExcel 批量导入（含进度回传）、自定义 MyBatis 拦截器自动转义 LIKE 通配符防 SQL 注入。',
    ],
    outcome:
      '系统 2023 年 7 月正式上线，核心功能稳定运行，实现多系统数据互通，研发管理效率显著提升。',
  },
  {
    name: 'QMS 质量管理系统',
    role: '核心开发',
    period: '2023.07 - 至今',
    background:
      '构建企业级质量管控体系，覆盖全链路质检流程，并引入 AI 智能诊断能力。',
    responsibility:
      '负责系统架构、核心模块开发、AI 能力集成与全流程落地，协同团队完成系统全模块建设。',
    works: [
      '开发报表引擎、质量看板等核心功能，优化数据统计逻辑与计算精度。',
      '基于 Apache Doris 构建实时分析引擎，承载全量历史数据聚合查询，支持实时报表秒级响应。',
      '实现 gRPC 服务端 + 客户端连接池，对接工作流引擎回调，支撑审批流程闭环。',
      '集成企业 ERP 系统（SAP RFC），实现业务数据实时联动。',
      '设计请求签名 + 时间戳防重放安全机制，基于共享密钥 + 请求参数排序加密，保障微服务间 API 调用的身份认证与防篡改。',
      '对接外部 AI 知识库服务，实现业务数据的向量化同步与语义检索，支撑智能诊断场景。',
    ],
    outcome: '系统稳定运行，全链路质量管控场景覆盖，管理效率显著提升。',
  },
  {
    name: 'IME 数据采集与监控平台',
    role: '技术负责人',
    period: '2022.03 - 2023.06',
    background:
      '打造高并发 IoT 数据中台，实现海量设备数据实时采集、传输、处理与存储一体化。',
    responsibility:
      '架构设计、核心开发、集群部署、性能优化与跨系统集成，带领技术团队完成平台从 0 到 1 搭建与落地。',
    works: [
      '搭建微服务架构，完成业务模块全功能开发；前期主导产线后台研发，涵盖生产、仓储、全链条追溯等模块，后续演进为统一数据平台。',
      '基于 mica-mqtt (Netty) 实现 MQTT 5.0 协议接入，利用 MQTT QoS 1 消息确认 + 优雅重连机制（动态刷新 clientId 适配云平台时间戳认证），支撑 2000+ 设备并发接入，保障设备连接可靠性与长期稳定运行。',
      '设计自适应批量处理引擎，根据处理耗时每 5s 动态调优批次大小（1~100），在高吞吐与低延迟间自动平衡，日处理数据 1 亿 +。',
      '构建双 Kafka 流拓扑（唯一索引 + 追加日志双通道），兼顾实时更新与历史追溯；通过 Redis 实现热点数据缓存与设备状态持久化。',
      '设计 IO/CPU 隔离线程池，分离消息解析与状态更新流量，结合 XXL-JOB 分布式调度完成定时批处理。',
      '对接统一登录、OA、SAP 等外部系统，完成 Oracle 至 Doris 数据迁移，部署 Nacos、Doris 集群。',
    ],
    outcome: '分布式架构可横向扩展，日处理数据量过亿，系统长期稳定运行。',
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: '浙江南都电源动力股份有限公司',
    role: '资深 Java 开发 / 技术负责人',
    period: '2021.08 – 至今',
    summary:
      '主导研发管理、质量管控、数据采集三大平台微服务架构，保障高并发与中间件集群稳定，推进 AI 能力落地。',
  },
  {
    company: '杭州三汇数字信息技术有限公司',
    role: 'Java 开发',
    period: '2016.11 – 2021.07',
    summary:
      '负责实时预警与寄递数据系统，Flink 流处理、HBase 海量存储与 Seata/Sentinel 高可用治理。',
  },
];
