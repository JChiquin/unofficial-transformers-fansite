'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const languages = ['es', 'en']

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    let segments = pathName.split('/')
    console.log(locale)
    console.log(segments)
    if (languages.some((lang) => lang == segments[1])) {
        segments[1] = locale
    } else {
        segments[2] = locale
    }
    return segments.join('/')
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {languages.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}