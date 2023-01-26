import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineComputer } from 'react-icons/md'
import style from './dashboardDrawer.module.scss'
// import avatar from '../../assets/images/about-img2.webp'

function dashboardRightDrawer() {
  return (
    <section className={style.drawer}>
      <div className={style.avatarWrapper}>
        <img
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1643440809/clapmi/avatar_3_lnfwyk.png`}
          alt='img'
          className='cc-img-fluid'
        />
      </div>
      <div>{`calendar`}</div>
      <div className={style.classSummary}>
        <div className={style.header}>
          <span className='fs-xs'>Today, 28th March, 2021</span>
          <h5 className={['fw-bold'].join(' ')}>Design Process</h5>
          <p className={['fs-sm', style.text].join(' ')}>
            The course is highly interactive with projects, Checklists &
            actionable lectures built into…
          </p>
        </div>
        <div className={style.classTimeType}>
          <div className='d-flex align-items-center gap-3'>
            <div>
              <AiOutlineClockCircle color='grey' size={20} />
            </div>
            <div>
              <p className='fw-bold fs-sm'>55 mins</p>
              <p className='fs-sm'>Duration</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <div>
              <MdOutlineComputer color='grey' size={20} />
            </div>
            <div>
              <p className='fw-bold fs-sm'>Live Class</p>
              <p className='fs-sm'>Lecture Type</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default dashboardRightDrawer
