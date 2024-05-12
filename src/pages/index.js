import React, { useState } from "react"
import { Link } from 'gatsby'
import AboutContent from '../content/aboutme.yml'
import ProjectContent from '../content/project.yml'
import SkillContent from '../content/skill.yml'
import ExperienceContent from '../content/experience.yml'
import HomeLayout from "../components/layout/home-layout"
import VideoPopupComponent from "../components/ui/video-popup"
import Svg from "../components/ui/svg"
import Action from "../components/ui/action"


const IndexPage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <HomeLayout>
      <body className="min-h-screen dark:bg-slate-900">
        <VideoPopupComponent popup={popup} setPopup={setPopup} />

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="pt-5 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className="lg:col-span-4">
              <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
                {AboutContent.title}
              </h1>
              {
                AboutContent.description.map((value) => {
                  return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                    {value}
                  </p>
                })
              }
            </div>
            <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox="0 0 1024 1024"  >
                <path d="M445.3888 611.09248m-308.47488 0a308.47488 308.47488 0 1 0 616.94976 0 308.47488 308.47488 0 1 0-616.94976 0Z" fill="#FFEC43"></path><path d="M445.39392 927.28832c-174.35648 0-316.19584-141.83936-316.19584-316.19584s141.83936-316.19584 316.19584-316.19584 316.19584 141.83936 316.19584 316.19584-141.83936 316.19584-316.19584 316.19584z m0-616.95488c-165.83168 0-300.75392 134.92224-300.75392 300.75392s134.92224 300.75392 300.75392 300.75392 300.75392-134.92224 300.75392-300.75392-134.92224-300.75392-300.75392-300.75392z" fill="#6B0204"></path><path d="M323.57376 665.33888m-31.09888 0a31.09888 31.09888 0 1 0 62.19776 0 31.09888 31.09888 0 1 0-62.19776 0Z" fill="#FFEB43"></path><path d="M323.57376 702.87872c-20.70016 0-37.53984-16.83968-37.53984-37.53984 0-20.70016 16.83968-37.53984 37.53984-37.53984s37.53984 16.83968 37.53984 37.53984c0 20.70016-16.83968 37.53984-37.53984 37.53984z m0-62.19776a24.69376 24.69376 0 0 0-24.66304 24.65792 24.69376 24.69376 0 0 0 24.66304 24.66304 24.69376 24.69376 0 0 0 24.66304-24.66304 24.69376 24.69376 0 0 0-24.66304-24.65792z" fill="#6B0306"></path><path d="M252.38528 492.7232m-19.69152 0a19.69152 19.69152 0 1 0 39.38304 0 19.69152 19.69152 0 1 0-39.38304 0Z" fill="#FFEB43"></path><path d="M252.38528 518.8608c-14.4128 0-26.13248-11.71968-26.13248-26.13248s11.71968-26.13248 26.13248-26.13248 26.13248 11.71968 26.13248 26.13248-11.71968 26.13248-26.13248 26.13248z m0-39.38816a13.27616 13.27616 0 0 0-13.25568 13.25568c0 7.30624 5.94944 13.25568 13.25568 13.25568s13.25568-5.94944 13.25568-13.25568a13.27616 13.27616 0 0 0-13.25568-13.25568z" fill="#6B0306"></path><path d="M501.00736 630.00576m-12.86144 0a12.86144 12.86144 0 1 0 25.72288 0 12.86144 12.86144 0 1 0-25.72288 0Z" fill="#FFEB43"></path><path d="M501.01248 649.30304a19.328 19.328 0 0 1-19.3024-19.3024 19.32288 19.32288 0 0 1 19.3024-19.29216 19.31264 19.31264 0 0 1 19.29216 19.29216c0 10.63936-8.6528 19.3024-19.29216 19.3024z m0-25.71264a6.4256 6.4256 0 1 0 0 12.8512 6.4256 6.4256 0 0 0 0-12.8512z" fill="#6B0306"></path><path d="M381.70624 405.3504m-11.63264 0a11.63264 11.63264 0 1 0 23.26528 0 11.63264 11.63264 0 1 0-23.26528 0Z" fill="#FFEB43"></path><path d="M381.71136 423.424c-9.9584 0-18.06848-8.11008-18.06848-18.06848s8.11008-18.06848 18.06848-18.06848 18.06848 8.11008 18.06848 18.06848-8.11008 18.06848-18.06848 18.06848z m0-23.26528a5.19168 5.19168 0 1 0 0 10.38336 5.19168 5.19168 0 0 0 0-10.38336z" fill="#6B0306"></path><path d="M577.31584 446.592a13.06624 13.06624 0 0 0-10.51648-8.53504l-32.11264-4.70016-13.94688-28.5184c-2.17088-4.44416-6.84544-7.30624-11.90912-7.30624-5.05344 0-9.73312 2.8672-11.90912 7.30624l-13.94688 28.5184-32.10752 4.7104a13.02016 13.02016 0 0 0-10.53184 8.53504 12.49792 12.49792 0 0 0 3.10784 13.11744l23.5776 23.20384-5.46304 32.14336c-0.82432 4.81792 1.32608 9.76896 5.4784 12.61056 3.97824 2.688 9.55392 2.9952 13.85472 0.73216l27.94496-14.8224 27.96032 14.83776a13.55776 13.55776 0 0 0 13.86496-0.74752c4.13184-2.83648 6.27712-7.7824 5.45792-12.5952l-5.46304-32.14336 23.5776-23.20384a12.52864 12.52864 0 0 0 3.08224-13.14304z" fill="#FFBD00"></path><path d="M543.104 536.42752a20.06016 20.06016 0 0 1-9.30816-2.31424l-24.96-13.24032-24.92416 13.21472c-6.28736 3.29728-14.68928 2.83136-20.47488-1.08032-6.26176-4.29056-9.46688-11.74528-8.22272-19.04128l4.90496-28.81024-21.19168-20.84864a18.87744 18.87744 0 0 1-4.66432-19.82976 19.44064 19.44064 0 0 1 15.68256-12.78976l28.7488-4.1984 12.43648-25.47712c3.27168-6.64064 10.22464-10.91584 17.70496-10.91584 7.49568 0 14.4384 4.29056 17.69472 10.91584l12.45184 25.47712 28.7488 4.1984a19.5328 19.5328 0 0 1 15.6672 12.75392 18.95424 18.95424 0 0 1-4.65408 19.88096L557.568 485.1712l4.90496 28.82048c1.23392 7.296-1.97632 14.74048-8.16128 18.99008a19.90656 19.90656 0 0 1-11.20768 3.44576z m-34.26816-30.1312l30.98624 16.4352c2.29888 1.18272 5.12 1.02912 7.22944-0.38912 2.03776-1.39776 3.11808-3.83488 2.71872-6.18496l-6.03648-35.46112 25.97888-25.55392c1.74592-1.72032 2.32448-4.13696 1.52064-6.44096a6.63552 6.63552 0 0 0-5.37088-4.26496l-35.46112-5.20704-15.44192-31.5648c-2.18624-4.47488-10.0352-4.49024-12.27264 0.01024l-15.41632 31.54944-35.47648 5.20704a6.6048 6.6048 0 0 0-5.38112 4.29056c-0.7936 2.2784-0.21504 4.66432 1.54624 6.4l25.96864 25.55392-6.01088 35.46112c-0.41472 2.35008 0.68096 4.79232 2.75456 6.22592 1.90976 1.26976 5.0688 1.4592 7.22944 0.33792l30.93504-16.40448z" fill="#6B0204"></path><path d="M543.0272 328.09472c96.59392 49.50016 137.47712 165.22752 124.61056 280.50432-28.07296 251.58656-325.77024 278.72768-355.61984 268.71808a297.38496 297.38496 0 0 0 136.01792 32.78848c165.00224 0 298.76224-133.76 298.76224-298.76224 0-131.77856-85.36064-243.54816-203.77088-283.24864z" fill="#FFC700"></path><path d="M677.30432 597.16608m-25.72288 0a25.72288 25.72288 0 1 0 51.44576 0 25.72288 25.72288 0 1 0-51.44576 0Z" fill="#FFEB43"></path><path d="M677.2992 629.33504c-17.73056 0-32.1536-14.4384-32.1536-32.16896s14.42304-32.16896 32.1536-32.16896 32.16896 14.4384 32.16896 32.16896-14.4384 32.16896-32.16896 32.16896z m0-51.456a19.30752 19.30752 0 0 0-19.2768 19.29216 19.30752 19.30752 0 0 0 19.2768 19.29216 19.31264 19.31264 0 0 0 19.29216-19.29216 19.31776 19.31776 0 0 0-19.29216-19.29216z" fill="#6B0306"></path><path d="M383.17056 232.1408c26.31168-5.8112 53.56544-9.10336 81.62816-9.10336 208.33792 0 377.23136 168.89344 377.23136 377.23136 0 115.79392-52.28032 219.27936-134.4 288.47616l10.496 21.248c89.61024-73.38496 146.82112-184.86272 146.82112-309.72416 0-220.99968-179.15392-400.1536-400.1536-400.1536a401.0496 401.0496 0 0 0-92.12416 10.7776l10.50112 21.248z" fill="#6B0204"></path><path d="M337.26464 186.14272m-81.7152 0a81.7152 81.7152 0 1 0 163.4304 0 81.7152 81.7152 0 1 0-163.4304 0Z" fill="#FFEC43"></path><path d="M337.26976 275.57376c-49.32096 0-89.43616-40.1152-89.43616-89.43616 0-49.31072 40.1152-89.42592 89.43616-89.42592s89.43616 40.1152 89.43616 89.42592c0 49.32096-40.1152 89.43616-89.43616 89.43616z m0-163.41504c-40.79616 0-73.99424 33.18784-73.99424 73.984s33.19808 73.99424 73.99424 73.99424 73.99424-33.19808 73.99424-73.99424-33.19808-73.984-73.99424-73.984z" fill="#6B0204"></path><path d="M361.1904 115.86048c23.96672 12.17536 34.10944 40.64256 30.91968 68.99712-6.9632 61.88544-80.82432 68.56192-88.23296 66.0992a74.28608 74.28608 0 0 0 33.74592 8.064c40.93952 0 74.12736-32.90112 74.12736-73.48736 0-32.41472-21.18144-59.90912-50.56-69.67296z" fill="#FFC700"></path><path d="M951.50592 474.9312m-40.45824 0a40.45824 40.45824 0 1 0 80.91648 0 40.45824 40.45824 0 1 0-80.91648 0Z" fill="#FFC700"></path><path d="M951.50592 523.1104c-26.5728 0-48.1792-21.6064-48.1792-48.1792s21.6064-48.18944 48.1792-48.18944 48.18944 21.61664 48.18944 48.18944-21.61664 48.1792-48.18944 48.1792z m0-80.9216a32.77824 32.77824 0 0 0-32.73216 32.74752 32.77312 32.77312 0 0 0 32.73216 32.73216c18.05824 0 32.74752-14.68928 32.74752-32.73216a32.77824 32.77824 0 0 0-32.74752-32.74752z" fill="#6C0000"></path><path d="M41.56928 418.39616m-30.34624 0a30.34624 30.34624 0 1 0 60.69248 0 30.34624 30.34624 0 1 0-60.69248 0Z" fill="#6C0000"></path><path d="M725.37088 882.89792m-30.34624 0a30.34624 30.34624 0 1 0 60.69248 0 30.34624 30.34624 0 1 0-60.69248 0Z" fill="#6C0000"></path><path d="M777.3184 207.53408m-30.34624 0a30.34624 30.34624 0 1 0 60.69248 0 30.34624 30.34624 0 1 0-60.69248 0Z" fill="#6C0000"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-12 lg:pt-0">
          <div className="flex justify-between items-center">
            <p className="text-xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              Skills
            </p>

            <Link to="/skills" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
              View More
            </Link>
          </div>
          <div className="mt-5 flex flex-col space-y-4 text-gray-700 dark:text-gray-300 ">
            {SkillContent.certificates.slice(0, 3).map((value) => {
              return <a href={value.link} target='blank'>
                <p className="hover:text-blue-600 dark:hover:text-blue-500 text-base md:text-lg text-gray-900 dark:text-gray-200 inline-flex items-center">
                  <div className="mr-2 h-auto">
                    <Svg svgName={value.svg.svgName} darkModeEnabled={value.svg.darkModeEnabled} svgSizeSm={5} svgSizeMd={7}></Svg>
                  </div>
                  {value.text}
                </p>
              </a>
            })}
          </div>
          <div className="mt-2 flex items-center gap-x-1 md:gap-x-2">
            {SkillContent.skillicons.map((value) => {
              return <div className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 dark:text-gray-400'>
                <Svg key={value.svgName} svgName={value.svgName} darkModeEnabled={value.darkModeEnabled}></Svg>
              </div>
            })}
          </div>
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-12 lg:pt-24">
          <div className="flex justify-between items-center">
            <p className="text-xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              Projects
            </p>
            <Link to="/projects" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
              View More
            </Link>
          </div>

          <div className="mt-5 lg:mt-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ProjectContent.projects.slice(0, 3).map((value) => {
              const [[name, content]] = Object.entries(value);

              return <div className="flex flex-col bg-white border shadow-sm rounded-md p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <p className="text-xs md:text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                  {content.date}
                </p>
                <p className="mt-1 font-bold text-md md:text-xl text-gray-800 dark:text-gray-200">
                  {name}
                </p>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-400">
                  {content.description}
                </p>
                <div className="mt-2 flex items-center gap-x-1">
                  {content.svgIcons.map((value) => {
                    return <div className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 dark:text-gray-400'>
                      <Svg key={value.svgName} svgName={value.svgName} darkModeEnabled={value.darkModeEnabled} svgSizeSm="5" svgSizeMd="7"></Svg>
                    </div>
                  })}
                </div>

                <div className="mt-2 flex gap-x-2">
                  {content.actions.map((value) => {
                    return <Action key={value.text} text={value.text} action={value.video ? () => { setPopup(value.video) } : null} asset={value.asset} link={value.link} color={value.color}></Action>
                  })}
                </div>

              </div>
            })}

          </div>
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-12 lg:pt-24">
          <div className="flex justify-between items-center">
            <p className="text-xl sm:text-3xl xl:text-4xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              Experiences
            </p>

            <Link to="/experiences" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
              View More
            </Link>
          </div>
          <ol className="mt-5 ml-3 lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
            {ExperienceContent.slice(0, 2).map((value, i, row) => {
              const [[name, content]] = Object.entries(value);

              return <li className={`ml-6 ${i !== (row.length - 1) && "pb-12"}`}>
                <div className="inline-flex items-center">
                  <span className="text-gray-700 dark:text-gray-200 absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                    </svg>
                  </span>
                  <p className="font-semibold text-md md:text-xl text-gray-900 dark:text-gray-200">
                    {name}
                  </p>
                </div>
                <p className="mt-2 mb-4 text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                  {content.date}
                </p>
                {content.description.map((value) => {
                  return <p key={value} className="mt-2 text-base text-gray-700 dark:text-gray-400">
                    {value}
                  </p>
                })}
                <div className="mt-4 flex gap-x-2">
                  {content.actions.map((value) => {
                    return <Action key={value.text} text={value.text} action={value.video ? () => { setPopup(value.video) } : null} asset={value.asset} link={value.link} color={value.color}></Action>
                  })}
                </div>
              </li>
            })}
          </ol>
        </div>

      </body>
    </HomeLayout>
  )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>