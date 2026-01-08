document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const langButtons = document.querySelectorAll(".lang-btn");

  const translations = {
    en: {
      "top.founded": "Founded: Jul 25, 2022",
      "top.hours": "Service: Mon - Fri 9:00-18:00",
      "brand.name": "Wenzhou Hongjin Commercial Management Co., Ltd.",
      "brand.tag": "Professional · Efficient · Sustainable",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.advantages": "Advantages",
      "nav.team": "Team",
      "nav.cases": "Solutions",
      "nav.news": "Insights",
      "nav.contact": "Contact",
      "nav.cta": "Book a Consult",
      "hero.kicker": "Specialized in commercial complex & enterprise management",
      "hero.title": "Empowering businesses for\n efficient and steady growth",
      "hero.desc":
        "Wenzhou Hongjin focuses on commercial complex management, enterprise consulting, and integrated marketing, delivering sustainable operations with a professional team and systematic approach.",
      "hero.cta1": "Book a consult",
      "hero.cta2": "View services",
      "hero.capital.label": "Registered Capital",
      "hero.capital.value": "CNY 1,000,000",
      "hero.address.label": "Registered Address",
      "hero.address.value":
        "Room 107, Bldg 34, Jinping Garden, Luoyang Town, Taishun, Wenzhou, Zhejiang",
      "hero.badge": "Creating value for clients since 2022",
      "hero.card.main.title": "One-stop commercial management",
      "hero.card.main.desc":
        "From top-level planning to operations, boosting project efficiency end-to-end.",
      "hero.card.secondary.title": "Core Focus",
      "hero.card.secondary.item1": "Commercial complex management",
      "hero.card.secondary.item2": "Enterprise management & consulting",
      "hero.card.secondary.item3": "Marketing & brand promotion",
      "services.title": "A full-cycle service system around business growth",
      "services.desc":
        "Strategy-led, operations-driven, data-informed — modular service packages for every growth stage.",
      "services.item1.title": "Commercial Complex Management",
      "services.item1.desc":
        "Leasing strategy, operations, and brand mix optimization to lift asset value and rental yields.",
      "services.item1.point1": "Project positioning & planning",
      "services.item1.point2": "Leasing strategy & execution",
      "services.item1.point3": "Operations & event programming",
      "services.item2.title": "Enterprise Management Consulting",
      "services.item2.desc":
        "Organization design, process optimization, and performance systems to build an efficient management backbone.",
      "services.item2.point1": "Org & process mapping",
      "services.item2.point2": "Policy & performance design",
      "services.item2.point3": "Ops KPIs & analytics",
      "services.item3.title": "Marketing Strategy & Planning",
      "services.item3.desc":
        "Integrated marketing aligned to brand position and target audience, covering offline events and digital ads.",
      "services.item3.point1": "Brand position & visual guidance",
      "services.item3.point2": "Integrated campaign planning",
      "services.item3.point3": "Online & offline promotion (incl. Google Ads)",
      "services.item4.title": "Tailored Advisory",
      "services.item4.desc":
        "Long-term, companion-style advisory tailored to each client’s context for sustained growth.",
      "services.item4.point1": "Retainer management advisory",
      "services.item4.point2": "Special-topic research",
      "services.item4.point3": "Management training & coaching",
      "adv.title": "Four reasons to choose Hongjin",
      "adv.item1.label": "Client satisfaction",
      "adv.item1.desc": "Standardized process + tailored plans keep satisfaction stable.",
      "adv.item2.label": "Clients served",
      "adv.item2.desc": "Across commercial complexes, retail, and services.",
      "adv.item3.label": "Core service areas",
      "adv.item3.desc": "Full chain from consulting to operations and marketing.",
      "adv.item4.label": "Founded",
      "adv.item4.desc": "Iterating playbooks since day one, delivering repeatable wins.",
      "team.title": "A professional team to safeguard your project",
      "team.desc":
        "A cross-disciplinary team from commercial real estate, consulting, and marketing — strategic and hands-on.",
      "team.item1.role": "Legal Representative / Project Director",
      "team.item1.desc":
        "Leads strategy and key projects; skilled in positioning and operations strategy for commercial complexes.",
      "team.item2.title": "Operations Team",
      "team.item2.role": "Project operations & delivery",
      "team.item2.desc":
        "Experienced in mall ops, events, and brand management to ensure plans land and perform.",
      "team.item3.title": "Consulting & Strategy Team",
      "team.item3.role": "Consulting & marketing strategy",
      "team.item3.desc":
        "Focused on management optimization and marketing strategy to lift internal efficiency and market impact.",
      "cases.title": "Sample solutions",
      "cases.item1.title": "Full launch plan for new commercial complex",
      "cases.item1.desc":
        "Positioning, flow planning, leasing strategy, and opening campaigns to secure stable traffic and rent in year one.",
      "cases.item1.tag1": "Positioning",
      "cases.item1.tag2": "Leasing",
      "cases.item1.tag3": "Opening marketing",
      "cases.item2.title": "Management system upgrade for growth-stage firms",
      "cases.item2.desc":
        "Rebalancing org structure and processes during rapid expansion; establishing policies and performance systems.",
      "cases.item2.tag1": "Process optimization",
      "cases.item2.tag2": "Policy building",
      "cases.item2.tag3": "Performance management",
      "cases.item3.title": "Brand co-marketing & campaign design",
      "cases.item3.desc":
        "Online-offline campaigns aligned to positioning and audience, amplified via Google Ads and digital channels.",
      "cases.item3.tag1": "Integrated marketing",
      "cases.item3.tag2": "Campaign design",
      "cases.item3.tag3": "Data review",
      "news.title": "Hongjin Insights · Latest",
      "news.item1.tag": "Industry",
      "news.item1.title": "Commercial complexes enter the era of precision ops",
      "news.item1.desc":
        "Leveraging footfall and tenant data to build precise ops models is key to performance uplift.",
      "news.item1.meta": "2025-12-20 · Hongjin Research",
      "news.item2.tag": "Company",
      "news.item2.title": "Hongjin launches SME management checkup",
      "news.item2.desc":
        "A diagnostic service to quickly surface management gaps and improvement paths for SMEs.",
      "news.item2.meta": "2025-11-05 · Company News",
      "news.item3.tag": "Case",
      "news.item3.title": "Regional high street upgrade recap",
      "news.item3.desc":
        "Tenant-mix reset and scene upgrades drove +35% traffic and steady rent growth.",
      "news.item3.meta": "2025-09-18 · Project Case",
      "contact.title": "Book a consult · Get a tailored plan",
      "contact.desc":
        "Leave your project info and contacts; our consultants will reach out with an initial diagnosis and proposal.",
      "contact.company": "Company: Wenzhou Hongjin Commercial Management Co., Ltd.",
      "contact.address":
        "Address: Room 107, Bldg 34, Jinping Garden, Luoyang Town, Taishun, Wenzhou, Zhejiang",
      "contact.email": "Email: godfreyezra7@gmail.com",
      "form.name.label": "Your Name",
      "form.name.ph": "Enter your name",
      "form.company.label": "Company",
      "form.company.ph": "Enter your company",
      "form.phone.label": "Phone",
      "form.phone.ph": "Enter your phone",
      "form.email.label": "Email",
      "form.email.ph": "Enter your email",
      "form.message.label": "Project or needs",
      "form.message.ph": "Describe your project, stage, or pain points",
      "form.submit": "Submit",
      "form.note": "This is a demo page; the form is not connected to backend yet.",
      "footer.desc":
        "Committed to pragmatic, reliable commercial management and consulting, creating long-term value with partners.",
      "footer.links": "Quick Links",
      "footer.contact": "Contact",
      "footer.address":
        "Address: Room 107, Bldg 34, Jinping Garden, Luoyang Town, Taishun, Wenzhou, Zhejiang",
      "footer.email": "Email: godfreyezra7@gmail.com",
      "footer.copy": "© 2022-2026 Wenzhou Hongjin Commercial Management Co., Ltd. All rights reserved.",
      "footer.disclaimer": "This site is for demo purposes only and not investment or legal advice.",
    },
    zh: {
      "top.founded": "成立日期：2022年07月25日",
      "top.hours": "服务时间：周一至周五 9:00-18:00",
      "brand.name": "温州宏锦商业管理有限公司",
      "brand.tag": "专业 · 高效 · 可持续",
      "nav.home": "首页",
      "nav.services": "核心业务",
      "nav.advantages": "服务优势",
      "nav.team": "团队介绍",
      "nav.cases": "解决方案",
      "nav.news": "新闻动态",
      "nav.contact": "联系我们",
      "nav.cta": "预约咨询",
      "hero.kicker": "专注商业综合体与企业管理服务",
      "hero.title": "助力企业迈向\n高效与稳健增长",
      "hero.desc":
        "温州宏锦商业管理有限公司深耕商业综合体管理、企业管理与咨询、市场营销策划等领域，以专业团队与系统方法，为客户打造可持续发展的经营体系。",
      "hero.cta1": "立即预约咨询",
      "hero.cta2": "了解服务方案",
      "hero.capital.label": "注册资本",
      "hero.capital.value": "人民币 100 万元",
      "hero.address.label": "注册地址",
      "hero.address.value": "浙江省温州市泰顺县罗阳镇新城区金彭花园34幢107室",
      "hero.badge": "自 2022 年起为客户创造价值",
      "hero.card.main.title": "一站式商业管理方案",
      "hero.card.main.desc": "从顶层规划到运营落地，全面提升项目运营效率。",
      "hero.card.secondary.title": "核心方向",
      "hero.card.secondary.item1": "商业综合体管理服务",
      "hero.card.secondary.item2": "企业管理与咨询",
      "hero.card.secondary.item3": "市场营销与品牌推广",
      "services.title": "围绕企业发展全周期的核心服务体系",
      "services.desc": "以战略为起点，以运营为抓手，以数据为驱动，为不同阶段的企业提供组合式服务方案。",
      "services.item1.title": "商业综合体管理",
      "services.item1.desc": "提供招商策划、运营管理、品牌组合优化等服务，帮助商业综合体提升整体价值与租金回报。",
      "services.item1.point1": "项目定位与规划",
      "services.item1.point2": "招商策略与执行",
      "services.item1.point3": "运营管理与活动策划",
      "services.item2.title": "企业管理咨询",
      "services.item2.desc": "聚焦组织管理、流程优化与绩效提升，协助企业搭建规范高效的管理体系。",
      "services.item2.point1": "组织与流程梳理",
      "services.item2.point2": "制度与绩效体系设计",
      "services.item2.point3": "运营指标与数据分析",
      "services.item3.title": "市场营销与策划",
      "services.item3.desc": "结合品牌定位与目标客群，制定整合营销策略，强化品牌影响力与客户转化，覆盖线下活动与线上数字广告。",
      "services.item3.point1": "品牌定位与视觉建议",
      "services.item3.point2": "整合营销活动策划",
      "services.item3.point3": "线上线下联动推广（含 Google Ads 等渠道）",
      "services.item4.title": "定制化顾问服务",
      "services.item4.desc": "根据客户实际情况提供长期顾问服务，以陪伴式方式助力企业持续发展。",
      "services.item4.point1": "常年管理顾问",
      "services.item4.point2": "专项课题研究",
      "services.item4.point3": "管理培训与辅导",
      "adv.title": "选择宏锦商业管理的四大理由",
      "adv.item1.label": "客户满意度",
      "adv.item1.desc": "通过标准化流程与定制化方案，保持稳定的客户满意度表现。",
      "adv.item2.label": "服务企业",
      "adv.item2.desc": "涵盖商业综合体、零售、服务业等多个行业类型。",
      "adv.item3.label": "核心服务板块",
      "adv.item3.desc": "覆盖从管理咨询、运营管理到市场营销的完整链路。",
      "adv.item4.label": "成立年份",
      "adv.item4.desc": "自成立以来持续迭代服务方法，形成可复制的项目经验。",
      "team.title": "专业团队，为您的项目保驾护航",
      "team.desc": "由具有商业地产、企业管理咨询与品牌营销背景的复合型团队组成，既懂战略布局，也熟悉一线运营。",
      "team.item1.role": "法定代表人 / 项目总监",
      "team.item1.desc": "负责公司整体战略规划与重点项目把控，擅长商业综合体整体定位及运营策略设计。",
      "team.item2.title": "运营管理团队",
      "team.item2.role": "项目运营与落地",
      "team.item2.desc": "在商管运营、活动策划、品牌管理方面拥有丰富实操经验，确保方案真正落地见效。",
      "team.item3.title": "咨询与策划团队",
      "team.item3.role": "管理咨询与市场策划",
      "team.item3.desc": "聚焦管理优化与营销策略，帮助客户提升内部管理效率与外部市场表现。",
      "cases.title": "典型解决方案示例",
      "cases.item1.title": "新开商业综合体整体运营方案",
      "cases.item1.desc": "从项目定位、动线规划到招商策略与开业活动，输出整体运营方案，帮助项目在开业首年实现稳定客流与租金收入。",
      "cases.item1.tag1": "项目定位",
      "cases.item1.tag2": "招商策略",
      "cases.item1.tag3": "开业营销",
      "cases.item2.title": "成长型企业管理体系升级",
      "cases.item2.desc": "针对企业快速扩张导致的管理失衡问题，梳理组织结构与流程，建立规范的制度与绩效体系。",
      "cases.item2.tag1": "流程优化",
      "cases.item2.tag2": "制度建设",
      "cases.item2.tag3": "绩效管理",
      "cases.item3.title": "品牌联动营销与活动策划",
      "cases.item3.desc": "结合项目定位与目标客群，设计线上线下联动活动，并通过 Google 广告等数字投放提升项目曝光与到访转化率。",
      "cases.item3.tag1": "整合营销",
      "cases.item3.tag2": "活动策划",
      "cases.item3.tag3": "数据复盘",
      "news.title": "宏锦观察 · 最新动态",
      "news.item1.tag": "行业洞察",
      "news.item1.title": "商业综合体运营进入精细化管理时代",
      "news.item1.desc": "通过客流数据与租户经营数据，构建精细化运营模型，成为提升项目绩效的关键。",
      "news.item1.meta": "2025-12-20 · 宏锦研究组",
      "news.item2.tag": "公司动态",
      "news.item2.title": "宏锦推出中小企业管理体检服务",
      "news.item2.desc": "面向中小企业推出管理体检与诊断服务，帮助企业快速识别管理短板与改进方向。",
      "news.item2.meta": "2025-11-05 · 公司新闻",
      "news.item3.tag": "案例分享",
      "news.item3.title": "某区域商业街升级改造项目回顾",
      "news.item3.desc": "通过业态重组与场景升级，项目整体客流提升 35%，租金收益稳步增长。",
      "news.item3.meta": "2025-09-18 · 项目案例",
      "contact.title": "预约咨询 · 获取针对性的解决方案",
      "contact.desc":
        "欢迎留下您的项目信息与联系方式，我们的顾问团队将尽快与您取得联系，为您提供初步诊断与合作建议。",
      "contact.company": "公司名称：温州宏锦商业管理有限公司",
      "contact.address": "注册地址：浙江省温州市泰顺县罗阳镇新城区金彭花园34幢107室",
      "contact.email": "邮箱：godfreyezra7@gmail.com",
      "form.name.label": "您的姓名",
      "form.name.ph": "请输入您的姓名",
      "form.company.label": "公司名称",
      "form.company.ph": "请输入贵公司名称",
      "form.phone.label": "联系电话",
      "form.phone.ph": "请输入联系电话",
      "form.email.label": "电子邮箱",
      "form.email.ph": "请输入邮箱地址",
      "form.message.label": "项目或需求简介",
      "form.message.ph": "请简单描述您的项目类型、当前阶段或希望解决的问题",
      "form.submit": "提交信息",
      "form.note": "本页面为展示用途，表单提交暂不连接后台系统。",
      "footer.desc": "致力于为客户提供稳健、务实的商业管理与咨询服务，携手合作伙伴，共同创造长期价值。",
      "footer.links": "快速链接",
      "footer.contact": "联系方式",
      "footer.address": "地址：浙江省温州市泰顺县罗阳镇新城区金彭花园34幢107室",
      "footer.email": "邮箱：godfreyezra7@gmail.com",
      "footer.copy": "© 2022-2026 温州宏锦商业管理有限公司 版权所有",
      "footer.disclaimer": "本网站示意内容仅供演示，不构成任何投资或法律建议。",
    },
  };

  const textNodes = document.querySelectorAll("[data-i18n]");
  const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  const htmlNodes = document.querySelectorAll("[data-i18n-html]");

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    textNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });
    placeholderNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        node.setAttribute("placeholder", dict[key]);
      }
    });
    htmlNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n-html");
      if (dict[key]) {
        node.innerHTML = dict[key];
      }
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      navbar.classList.remove("open");
    });
  });

  applyLang("en");

  if (toggle) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
});


