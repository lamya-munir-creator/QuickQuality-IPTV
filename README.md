"# QuickQuality-IPTV" 
# QuickQuality-IPTV

منصة ويب احترافية لإدارة وبيع اشتراكات IPTV.

## 📌 وصف المشروع

QuickQuality-IPTV هو مشروع ويب يهدف إلى توفير تجربة سهلة وسريعة لعرض وبيع وإدارة اشتراكات IPTV، مع تصميم حديث ومتجاوب يعمل على جميع الأجهزة.

---

# 🚀 التقنيات المستخدمة

- HTML5
- CSS3
- JavaScript
- Responsive Design
- Git & GitHub


---

# ⚙️ تشغيل المشروع محليًا

لا يحتاج المشروع إلى خادم خاص.

يمكن تشغيله مباشرة:

1. افتح مجلد المشروع.
2. افتح ملف:

```
index.html
```

في المتصفح.

أو استخدم Live Server في VS Code.

---

# 👥 نظام العمل للفريق (Git Workflow)

## الفروع الرئيسية

```
main
│
└── Production
    النسخة المستقرة والجاهزة للنشر


develop
│
└── Development
    نسخة التطوير الحالية
```

---

# 🔒 قواعد العمل

## ممنوع:

- التعديل المباشر على فرع `main`.
- رفع الأكواد مباشرة إلى `main`.
- دمج أي كود بدون مراجعة.

## يجب:

- العمل على Branch خاص بكل ميزة.
- إنشاء Pull Request قبل الدمج.
- مراجعة التعديلات قبل اعتمادها.

---

# 📥 إعداد المشروع لأول مرة

## تحميل المشروع

```bash
git clone https://github.com/lamya-munir-creator/QuickQuality-IPTV.git
```

الدخول إلى المشروع:

```bash
cd QuickQuality-IPTV
```

الانتقال إلى فرع التطوير:

```bash
git checkout develop
```

تحديث آخر نسخة:

```bash
git pull origin develop
```

---

# 🌱 إنشاء Feature جديدة

كل مطور يجب أن ينشئ فرعًا خاصًا به.

مثال:

```bash
git checkout -b feature/home-page
```

أمثلة:

```
feature/home-page
feature/subscriptions-page
feature/contact-page
feature/whatsapp-integration
feature/responsive-design
```

---

# 💾 حفظ التعديلات

بعد الانتهاء من العمل:

إضافة الملفات:

```bash
git add .
```

إنشاء Commit:

```bash
git commit -m "Describe your changes"
```

رفع الفرع:

```bash
git push origin feature/name
```

---

# 🔄 Pull Request Workflow

طريقة الدمج:

```
feature/name
       |
       ↓
    develop
       |
       ↓
      main
```

الخطوات:

1. المطور ينشئ Feature Branch.
2. يرفع التعديلات إلى GitHub.
3. ينشئ Pull Request.
4. تتم مراجعة الكود.
5. يتم دمج التعديل في develop.
6. بعد الاختبار يتم دمجه إلى main.

---

# 🐛 إصلاح الأخطاء

لإصلاح مشكلة:

إنشاء فرع:

```bash
git checkout -b bugfix/problem-name
```

بعد الإصلاح:

```bash
git add .
git commit -m "Fix issue description"
git push origin bugfix/problem-name
```

---

# 👨‍💻 صلاحيات الفريق

الأدوار:

| الصلاحية | الاستخدام |
|---|---|
| Admin | إدارة كاملة للمشروع |
| Maintain | إدارة المستودع والفروع |
| Write | تطوير ورفع الأكواد |
| Read | مشاهدة المشروع فقط |

---

# 📋 قواعد كتابة Commit

استخدم وصفًا واضحًا:

جيد:

```
Add subscription cards section
```

```
Fix mobile navigation issue
```

غير جيد:

```
update
```

```
changes
```

---

# 📌 Roadmap

## المرحلة الأولى

- تصميم الواجهة الرئيسية.
- صفحات الاشتراكات.
- نظام التواصل عبر WhatsApp.
- تحسين تجربة المستخدم.

## المرحلة الثانية

- لوحة إدارة.
- إدارة العملاء.
- إدارة الاشتراكات.

## المرحلة الثالثة

- نظام SaaS متكامل.
- الدفع الإلكتروني.
- التقارير والتحليلات.

---

# 📞 التواصل

Project:

QuickQuality-IPTV

GitHub:

https://github.com/lamya-munir-creator/QuickQuality-IPTV
