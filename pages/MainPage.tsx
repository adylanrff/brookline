import styles from '../styles/Home.module.css'
import BaseSection from './section/BaseSection'
import DetailSection from './section/DetailSection'

export default function MainPage() {
  return (
    <div className="p-0 min-h-screen bg-[#E7F4FF] flex-1 flex flex-row justify-evenly">
      <div className='flex-5 bg-slate-200 text-center'>
        <BaseSection />
      </div>
      <div className='flex-4 text-center'>
        <DetailSection />
      </div>
    </div>
  )
}
