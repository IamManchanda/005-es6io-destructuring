/**
 * JS
 */

const harry = {
  firstName: 'Harry',
  lastName: 'Manchanda',
  links: {
    social: {
      twitter: 'https://twitter.com/harmanmanchanda',
      facebook: 'https://www.facebook.com/IamManchanda',
      linkedin: 'https://www.linkedin.com/in/harrymanchanda/',
      github: 'https://github.com/IamManchanda',
      gplus: 'https://plus.google.com/+HarryManchanda'
    },
    web: {
      site: 'http://harry.zone/',
      blog: [
        'https://tech.io/users/2195783/IamManchanda', 
        'https://codeburst.io/@harry.dev', 
        'https://scotch.io/@IamManchanda'
      ],
    }
  },
};

const {twitter, facebook: fb, linkedin, github, gplus} = harry.links.social;

const settings = {
  width: 300,
  color: 'Black',
};

const {width = 100, height = 100, color = 'Blue', fontSize = 25} = settings;

// const { w: width = 400, h: height = 500 } = { w: 800 }

