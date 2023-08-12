'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const languages = [
  {
    locale: 'es',
    icon: "https://www.pinclipart.com/picdir/big/102-1028023_spain-clip-art.png",
  }, {
    locale: 'en',
    icon: "https://cdn4.iconfinder.com/data/icons/iconsimple-flagtypes/512/united_states-256.png",
  }]

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    let segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
    //if (languages.some((lang) => lang == segments[1])) {
    //}
    //return `/${locale}${pathName}`

  }

  return (
    <Box>
      {languages.map((language) => {
        return (
          <IconButton LinkComponent={Link} href={redirectedPathName(language.locale)} color="inherit">
            <img width={30} src={language.icon}/>
          </IconButton>
        )
      })}
    </Box>
  )
}