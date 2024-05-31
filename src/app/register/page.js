'use client'
import ConfirmPhone from '@/components/templates/login-register/register/confirmPhone/ConfirmPhone'
import Register from '@/components/templates/login-register/register/main/Register'
import React, { useState } from 'react'
import { REGISTER_CONFIRM_CODE_PAGE, REGISTER_MAIN_PAGE } from '@/utils/Constant'

export default function paage() {

  const [pageMode, setPageMode] = useState(REGISTER_MAIN_PAGE)

  function changePageModeToMain(){
    setPageMode(REGISTER_MAIN_PAGE)
  }

  function changePageModeToConfirmPage(){
    setPageMode(REGISTER_CONFIRM_CODE_PAGE)
  }

  return (
    <>
      {pageMode === REGISTER_MAIN_PAGE ?
        (<Register changePageMode={changePageModeToConfirmPage}/>) :
        (<ConfirmPhone changePageMode={changePageModeToMain}/>)
      }
    </>
  )


}
