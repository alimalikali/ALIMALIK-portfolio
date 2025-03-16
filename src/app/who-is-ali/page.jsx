import Education from '@/components/Education'
import Inspiration from '@/components/Inspiration'
import Language from '@/components/Language'
import Mentors from '@/components/Mentors'

const Info = () => {
  return (
    <div className='c-space mt-10 sm:mb-20 mb-30 flex flex-col gap-20'>
      <Inspiration />
      <Mentors />
      <Education />
      <Language />
    </div>
  )
}

export default Info