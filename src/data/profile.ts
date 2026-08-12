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
  highlights: string[];
};

export const projects: ProjectItem[] = [
  {
    name: 'IME 数据采集与监控平台',
    role: '技术负责人',
    period: '2022.03 – 2023.06',
    highlights: [
      'MQTT 5.0 接入 2000+ 设备，优雅重连保障长期稳定',
      '自适应批量处理引擎，日处理数据 1 亿+',
      '双 Kafka 流拓扑 + IO/CPU 隔离线程池，高吞吐低延迟',
    ],
  },
  {
    name: '研发管理系统',
    role: '项目负责人',
    period: '2022.10 – 至今',
    highlights: [
      '全维度权限体系（菜单 / 按钮 / 行级 / 列级）动态判定',
      '策略模式审批路由，新增流程即插即用，交付周期缩短 60%',
      'Redis Lua 幂等注解，多数据源解耦与跨系统集成',
    ],
  },
  {
    name: 'QMS 质量管理系统',
    role: '核心开发',
    period: '2023.07 – 至今',
    highlights: [
      'Apache Doris 实时分析，报表秒级响应',
      '对接 AI 知识库，向量化同步与语义检索支撑智能诊断',
      '请求签名防重放 + ERP/工作流闭环集成',
    ],
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
