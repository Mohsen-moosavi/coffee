import React from 'react'
import style from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <main className={style.main}>
            <section>
                <div className="container">
                    <div>
                        <h1 className="section-title">در باره ما</h1>
                        <div className="row gy-5">
                            <div className="col-12 col-lg-4">
                                <p className={style.aboutUsParagraph}>مجموعه قهوه چی اولین مجموعه مرتبط با قهوه در ایران است که در سال 2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association of Europe) در آمده است.</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <p className={style.aboutUsParagraph}>تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه چی واردات مواد اولیه راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه است.</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <p className={style.aboutUsParagraph}>مجموعه قهوه چی اولین مجموعه مرتبط با قهوه در ایران است که در سال 2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association of Europe) در آمده است.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div>
                        <h2 className="section-title">داستان قهوه چی</h2>
                        <div className="row gy-5">
                            <div className="col-12 col-md-6">
                                <div>
                                    <p className={style.historyParagraph}>تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه چی واردات مواد اولیه راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه است.</p>
                                    <p className={style.historyParagraph}>مجموعه قهوه چی اولین مجموعه مرتبط با قهوه در ایران است که در سال 2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association of Europe) در آمده است و بسیاری از دوره‌های مربوط به فرآوری قهوه را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در زمینه بو دادن قهوه(Roasting) را در کشور آمریکا که از پیشگامان این صنعت است را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و تکنولوژی روز دنیا وارد مرحله تولید قهوه به صورت صنعتی و گسترده شده‌ایم و مفتخریم اعلام کنیم که «قهوه چی» از این پس یک نام تجاری صنعتی در صنعت قهوه ایران است</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <p className={style.historyParagraph}>مسیری را که بنیان‌گذاران «قهوه چی» در دهه 20 شمسی آغاز کرده‌اند اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94 موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به تولید صنعتی و انبوه کرده‌ایم.</p>
                                    <p className={style.historyParagraph}>از دیگر افتخارات مجموعه «قهوه چی» اخذ مدرک دیپلم دانش قهوه از انجمن قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee Diploma)</p>
                                    <p className={style.historyParagraph}>امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع محصول در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.</p>
                                    <p className={style.historyParagraph}>صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
