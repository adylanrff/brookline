import { useTranslation } from "react-i18next";

export default function LanguagePage() {
    const { t, i18n } = useTranslation()

    const handleChangeLanguageEn = () => {
        i18n.changeLanguage('en')
    }

    const handleChangeLanguageId = () => {
        i18n.changeLanguage('id')
    }

    return (
        <div className="p-0 min-h-screen bg-[#E7F4FF] w-full lg:w-[calc(100%_-_13rem)] lg:ml-52 mt-14 lg:mt-0">
            <div className={'px-7 py-5 lg:p-7 '}>
                <p className='font-body text-[24px] font-bold mb-7'>{t('language-setting-title')}</p>
                <div className="lg:flex lg:gap-5">
                    <div onClick={handleChangeLanguageEn} className="mb-5 flex px-5 py-4 bg-white rounded-xl shadow-md w-full md:w-1/2 lg:w-fit items-center gap-6 hover:cursor-pointer lg:hover:bg-[#F5F5F5]">
                        <img className="w-6 h-6" src={'/en.png'} />
                        <p className="font-body">English</p>
                        {i18n.language === 'en' && <div className="flex justify-end w-full">
                            <img className="w-5 h-5" src={'/check.png'} />
                        </div>}
                    </div>
                    <div onClick={handleChangeLanguageId} className="mb-5 flex px-5 py-4 bg-white rounded-xl shadow-md w-full md:w-1/2 lg:w-fit items-center gap-6 hover:cursor-pointer lg:hover:bg-[#F5F5F5]">
                        <img className="w-6 h-6" src={'/id.png'} />
                        <p className="font-body">Indonesia</p>
                        {i18n.language === 'id' && <div className="flex justify-end w-full">
                            <img className="w-5 h-5" src={'/check.png'} />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}