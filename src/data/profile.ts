export const profile = {
  brand: 'Feike',
  title: '资深 Java 开发 / Java 技术负责人',
  tagline: '10 年 Java 开发经验，5 年新能源制造业务经验，建设生产、质量与研发数字化平台。',
} as const;

export type StatItem = {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
};

export const stats: StatItem[] = [
  {label: 'Java 开发经验', value: 10, suffix: ' 年'},
  {label: '新能源制造经验', value: 5, suffix: ' 年'},
  {label: 'IME 质量控制点', value: 4000, prefix: '约 ', suffix: ' 个'},
  {label: 'IME 日增量数据', value: 1, prefix: '约 ', suffix: ' 亿条'},
];

export const strengths: string[] = [
  '深耕 Java 后端与新能源制造业务，覆盖 MES 产线后台、IME 智能生产、QMS 质量管理和 IPD 研发管理，具备从业务需求、架构设计到上线与持续迭代的完整经验。',
  '作为 IME 技术负责人，主导多工厂生产监控与设备采集平台建设，覆盖约 4000 个质量控制点、日增量约 1 亿条数据，具备消息解耦、批量处理、线程池隔离与集群部署实践。',
  '作为 IPD 项目负责人、QMS 核心开发，落地多层级权限、审批扩展与幂等控制，打通 SAP、OA/BPM 与多数据库链路；持有 PMP 认证，具备跨部门协作、现场交付和技术带教经验。',
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Java 后端',
    items: ['Java', 'Spring Boot 3', 'Spring Cloud Alibaba', 'MyBatis-Plus', 'Nacos', 'OpenFeign', 'Spring Cloud Gateway'],
  },
  {
    category: '业务与工程设计',
    items: ['微服务架构', '多层级权限', '审批策略设计', 'Redis Lua 幂等控制', '动态数据源', '异步与批量处理', 'IO / CPU 线程池隔离'],
  },
  {
    category: '消息与数据处理',
    items: ['MQTT 5.0', 'mica-mqtt / Netty', 'RabbitMQ', 'Redis', 'XXL-JOB', 'Doris', 'Flink', 'HBase', 'Hive'],
  },
  {
    category: '数据库与系统集成',
    items: ['MySQL', 'Oracle', 'SQL Server', 'PostgreSQL', 'SAP RFC', 'OA/BPM', 'gRPC', '钉钉消息', '请求签名与时间戳校验'],
  },
  {
    category: '部署与 AI 应用',
    items: ['Linux', 'Docker', 'Nacos / Doris 集群', '数据迁移', '质量知识库集成', '业务数据向量化同步', '语义检索', 'AI 业务接口封装'],
  },
];

export type ProjectItem = {
  name: string;
  role: string;
  period: string;
  background: string;
  highlights: [string, string, string];
  details: string[];
  outcome: string;
};

export const projects: ProjectItem[] = [
  {
    name: 'IPD 研发管理平台',
    role: '项目负责人',
    period: '2023.07 上线，持续迭代',
    background: '围绕研发项目、计划、任务与审批协同，负责 Java 后端架构迭代、核心功能、权限设计及 OA/BPM 集成。',
    highlights: [
      '研发协同：落地任务与里程碑提醒、甘特图任务依赖、研发周报、工时统计及项目看板，支持计划与执行跟踪。',
      '权限与审批：设计菜单、按钮、行级和列级权限，以回调工厂与策略模式扩展不同业务单据的审批逻辑。',
      '系统协同：连接 Oracle、SQL Server、PostgreSQL，打通 OA 立项单同步、BPM 流程回调与钉钉通知。',
    ],
    details: [
      '基于 Spring Boot 3、Spring Cloud Alibaba 实现研发业务与配置模板，通过 OpenFeign 对接权限中心进行运行时判定。',
      '审批回调按单据类型分发，各策略分别处理需求单、立项单、变更单等业务逻辑，新增类型通过扩展策略接入。',
      '基于 Redis Lua 与 SpEL 封装 @Idempotent 注解，防止表单重复提交；实现 EasyExcel 批量导入与进度回传。',
      '通过动态数据源连接存量数据库，支持研发平台与既有业务系统的数据协同。',
    ],
    outcome: '2023 年 7 月上线并持续迭代，研发计划、任务、权限与审批流程投入使用，打通研发平台与 OA/BPM 数据链路。',
  },
  {
    name: 'QMS 质量管理系统',
    role: '核心开发',
    period: '2023.07 - 至今',
    background: '建设覆盖过程质量、计量器具及售后质量的管理平台，负责核心业务模块、报表统计、工作流与 AI 应用集成。',
    highlights: [
      '质量闭环：开发计量器具全流程管理、售后质量追溯、班组直通率统计与质量看板，统一报表统计口径。',
      '分析与集成：以 Doris 支持质量报表秒级响应，通过 gRPC 工作流回调和 SAP RFC 完成流程与 ERP 数据联动。',
      'AI 知识查询：对接外部质量知识库与向量检索服务，完成业务数据向量化同步并封装 6 项 AI 业务接口。',
    ],
    details: [
      '完成售后台账补录、检验报废与制程报废分类等功能，优化报表统计逻辑与计算精度。',
      '基于 Doris 聚合历史数据，服务质量问题分析与生产指标跟踪。',
      '实现 gRPC 服务端与客户端连接池，对接工作流回调；通过 SAP RFC 实现质量系统与 ERP 数据联动。',
      '设计请求签名与时间戳校验机制，支持内部接口身份校验、防篡改及防重放。',
    ],
    outcome: '过程质量、计量器具和售后追溯功能上线使用，完成质量业务、工作流、ERP 与知识查询服务集成。',
  },
  {
    name: 'IME 智能生产平台',
    role: '技术负责人',
    period: '2022.03 - 2023.06',
    background: '建设多工厂统一生产监控与设备管理平台，负责分布式架构、核心开发、采集处理、集群部署及现场交付。',
    highlights: [
      '工业数据：覆盖约 4000 个质量控制点、日增量约 1 亿条数据，通过 MQTT 5.0 接入设备采集链路。',
      '处理优化：动态调整批次大小，隔离 IO / CPU 线程池，以 RabbitMQ 解耦设备状态处理。',
      '多工厂交付：完成 Nacos / Doris 集群部署、Oracle 至 Doris 数据迁移，承担现场部署、技术带教与核心工作交接。',
    ],
    details: [
      '开发设备台账、点巡检、设备保养等 PC / APP 业务，接入海康视频与 OA 单点登录。',
      '基于 mica-mqtt / Netty 接入 MQTT 5.0，采用 QoS 1 消息确认与断线重连，动态刷新 clientId 适配云平台时间戳认证。',
      '根据近期处理耗时动态调整批次大小（1-100 条），平衡吞吐与延迟，减少消息处理任务间的资源竞争。',
      '结合 Redis 缓存与 XXL-JOB 调度完成状态管理及定时批处理，支持平台横向扩展。',
    ],
    outcome: '完成多工厂平台交付及约 1 亿条日增量数据采集处理，设备管理、生产监控与数据分析能力投入使用。',
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
    role: 'Java 开发 / 项目及技术负责人',
    period: '2021.08 - 至今',
    summary: '围绕新能源制造的生产、质量与研发业务，担任 IPD 项目负责人、QMS 核心开发和 IME 技术负责人；负责 MES Android 端后台与 SAP 接口改造，承担后端架构、系统集成、现场交付与技术带教。',
  },
  {
    company: '杭州三汇数字信息技术有限公司',
    role: 'Java 开发',
    period: '2016.11 - 2021.07',
    summary: '参与公安 / 安保领域寄递大数据、重点人员关联分析与实时预警系统建设，负责核心模块、HBase 数据建模、Hive 加工调度与 Flink 实时规则，完成接口联调和上线支持。',
  },
];

export type OpenSourcePractice = {
  title: string;
  name: string;
  label: string;
  description: string;
  capabilities: {title: string; description: string}[];
  sourceUrl: string;
  docsPath: string;
};

export const openSourcePractice: OpenSourcePractice = {
  title: '开源 AI 工程实践',
  name: 'ai-example',
  label: '个人开源项目',
  description: '围绕知识检索与 Agent 工具调用，探索 AI 应用的权限控制、会话一致性、流式恢复与工程验证。',
  capabilities: [
    {
      title: '知识检索与 Agent',
      description: '实现 pgvector 向量与全文混合检索、RRF 融合和可选查询改写；为 Agent 工具调用加入角色权限与审计。',
    },
    {
      title: '会话与流式可靠性',
      description: '通过 PostgreSQL 事务与唯一约束保障完整轮次和幂等写入，结合 Redis 会话锁、事件日志实现跨实例 SSE 断线续传。',
    },
    {
      title: '安全与工程验证',
      description: '实现 JWT 鉴权、租户访问控制、Redis 限流和密钥信封加密，提供双实例部署配置、自动化测试及可观测面板。',
    },
  ],
  sourceUrl: 'https://github.com/Feike1993/ai-example',
  docsPath: '/docs/ai-example/overview',
};
