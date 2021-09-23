import english from '../Assets/Images/icons/ic_en_lang.svg';
import portuguese from '../Assets/Images/icons/ic_pt_lang.svg';
import italian from '../Assets/Images/icons/ic_it_lang.svg';

export const strings = [
  {
    id: 1,
    code: 'en',
    name: 'english',
    other: {
      1: {
        code: 'pt',
        name: 'portuguese',
        flag: portuguese,
      },
      2: {
        code: 'en',
        name: 'italian',
        flag: italian,
      },
    },
    trans:
      {
        header: {
          pt: 'portuguese',
          it: 'italian',
          phoneNumber: 'phone number',
        },
        cyour: 'Create your',
        waccout: 'WIT Account',
        demo: 'demo of localization feature',
      },
  },
  {
    id: 2,
    code: 'pt',
    name: 'portuguese',
    other: {
      1: {
        code: 'it',
        name: 'italiano',
        flag: italian,
      },
      2: {
        code: 'en',
        name: 'inglês',
        flag: english,
      },
    },
    trans:
      {
        header: {
          it: 'Italiano',
          en: 'inglês',
          phoneNumber: 'número de Telefone',
        },
        cyour: 'Crie sua',
        waccout: 'Conta WIT',
        demo: 'demostração da funcionalidade de troca de linguagem',
      },
  },
  {
    id: 3,
    code: 'it',
    name: 'Italian',
    other: {
      1: {
        code: 'en',
        name: 'inglese',
        flag: english,
      },
      2: {
        code: 'pt',
        name: 'portoghese',
        flag: portuguese,
      },
    },
    trans:
      {
        teste: 1,
      },
  },
];
