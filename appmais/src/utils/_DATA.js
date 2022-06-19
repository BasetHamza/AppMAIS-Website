let users = {
    PIs: {
        tashakkorir: {
            id: 'tashakkorir',
            name: 'Dr. Rahman Tashakkori',
            imageLocation: '',
            url: ''
          },
          perryrm: {
            id: 'perryrm',
            name: 'Dr. Mitch Parry',
            imageLocation: '',
            url: ''
          },
          chialvoch: {
            id: 'chialvoch',
            name: 'Dr. Clare Scott Chialvo',
            imageLocation: '',
            url: ''
          },
          hamzaas: {
            id: 'hamzaas',
            name: 'Dr. Abdelbaset Hamza',
            imageLocation: '',
            url: ''
          }
    },
    collaborators: {
        fengt: {
            id: 'fengt',
            name: 'Dr. Tinghao Feng',
            imageLocation: '',
            url: ''
          }
    },
    Researchers: {
        campellcl: {
            id: 'campellcl',
            name: 'Chris Campell',
            imageLocation: '',
            url: ''
          }
    },
    Students: {
        obrienwr: {
            id: 'obrienwr',
            name: 'Will O\'Brien',
            imageLocation: '',
            url: ''
          }
    }
  }
  
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }  