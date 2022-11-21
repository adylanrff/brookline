import styles from '../styles/Home.module.css'
import BaseSection from './section/BaseSection'
import DetailSection from './section/DetailSection'

export default function MainPage() {
  return (
    <div className="p-0 min-h-screen bg-[#E7F4FF] flex-1 flex flex-row justify-evenly w-[calc(100%_-_13rem)]">
      <div className='flex-5 p-7'>
        <BaseSection />
      </div>
      <div className='flex-4 p-7 sticky top-0 right-0 bg-white'>
        <DetailSection />
      </div>
    </div>
  )
}
