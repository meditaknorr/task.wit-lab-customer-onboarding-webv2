import en from '../Assets/Images/icons/ic_en_lang.svg';
import pt from '../Assets/Images/icons/ic_pt_lang.svg';
import it from '../Assets/Images/icons/ic_it_lang.svg';

export const translations = [
  {
    id: 1,
    code: 'en',
    name: 'english',
    flag: en,
    translatedAvailableLanguages: [
      {
        id: 11,
        code: 'pt',
        name: 'portuguese',
      },
      {
        id: 12,
        code: 'it',
        name: 'italian',
      },
      {
        id: 13,
        code: 'en',
        name: 'english',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'phone number',
        },
        onboarding: {
          createYour: 'Create your',
          witAccount: 'WIT Account',
          toOpen: 'To open your account, you need to:',
          validatePhone: 'Validate your phone number',
          scanDocument: 'Scan your voter card',
          takeSelfie: 'Take a selfie',
          buttonStart: 'Let\'s start',
          alreadyRegstered: 'Already Registered?',
          seeStatus: 'See status',
        },
      },
  },
  {
    id: 2,
    code: 'pt',
    flag: pt,
    name: 'portuguese',
    translatedAvailableLanguages: [
      {
        id: 21,
        code: 'pt',
        name: 'português',
      },
      {
        id: 22,
        code: 'en',
        name: 'inglês',
      },
      {
        id: 23,
        code: 'it',
        name: 'italiano',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'número de Telefone',
        },
        onboarding: {
          createYour: 'Crie a sua',
          witAccount: 'Conta WIT',
          toOpen: 'Para poder criar a sua conta, você precisa:',
          validatePhone: 'Validar o seu número de telefone.',
          scanDocument: 'Digitalizar o seu cartão de eleitor.',
          takeSelfie: 'Tire ou carregar uma foto sua, selfie.',
          buttonStart: 'Criar uma conta',
          alreadyRegstered: 'já se registrou?',
          seeStatus: 'Verifique o estado',
        },
      },
  },
  {
    id: 3,
    code: 'it',
    name: 'Italian',
    flag: it,
    translatedAvailableLanguages: [
      {
        id: 31,
        code: 'en',
        name: 'inglese',
      },
      {
        id: 32,
        code: 'it',
        name: 'italiano',

      },
      {
        id: 33,
        code: 'pt',
        name: 'portoghese',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'numero di telefono',
        },
        onboarding: {
          createYour: 'Crea il tuo',
          witAccount: 'Conto WIT',
          toOpen: 'Per aprire il tuo account, devi:',
          validatePhone: 'Convalida il tuo numero di telefono',
          scanDocument: 'Scansiona la tua tessera elettorale',
          takeSelfie: 'Fai un selfie',
          buttonStart: 'Creare un account',
          alreadyRegstered: 'Già Registrato?',
          seeStatus: 'Vedi stato',
        },
      },
  },
];
