import { FaAccessibleIcon ,FaGg } from 'react-icons/fa'
import { SiDatabricks } from 'react-icons/si'
import { MdConnectWithoutContact } from 'react-icons/md'


export const featureList = [
    {
       id:1,
       icone: <FaAccessibleIcon color='#0a1930' size={22}/>,
       heading: 'Designed For You',
       text: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam'
    },
    {
        id:2,
        icone: <SiDatabricks color='#0a1930' size={22}/>,
        heading: 'Keep Your History',
        text: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam'
     },
     {
         id:3,
         icone: <MdConnectWithoutContact color='#0a1930' size={22}/>,
         heading: 'Stay Conected',
         text: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam'
      },
      {
          id:4,
          icone: <FaGg color='#0a1930' size={22}/>,
          heading: 'Take Control',
          text: 'Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam'
       }
]