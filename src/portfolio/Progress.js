import React from 'react'
import {ProgressList ,H1} from './ProgressList';
function Progress() {
  return (
    <div className='grid grid-cols-3 p-3'>
      <div className=''><H1 skills={'Javascript'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={70}/></div>
      <div className=''><H1 skills={'React'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={60}/></div>
      <div className=''><H1 skills={'Python'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={80}/></div>
      <div className=''><H1 skills={'Node JS'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={65}/></div>
      <div className=''><H1 skills={'C++'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={90}/></div>
      <div className=''><H1 skills={'Git/Github'}/></div>
      <div className='col-span-2 p-2'><ProgressList width={75}/></div>
    </div>
  )
}

export default Progress
