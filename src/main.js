
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { home } from './page/home.js'
import { properties } from './page/properties.js'
import { agents } from './page/agents.js';
import { about } from './page/about.js';
import { contact } from './page/contact.js';
import { listing } from './page/listing.js';








window.onload =() =>{
    loadPage(window.location.pathname)
}

export function seo(data={}){

}

function loadPage(path){
     const app = document.getElementById('app');
     switch (path){
        case '/':
          case '/home':
            app.innerHTML = home()
            break;
            case '/properties':
              app.innerHTML = properties()
              break;
              case '/agents':
                app.innerHTML = agents()
                break;
                case '/about':
                  app.innerHTML = about()
                  break;
                  case '/contact':
                    app.innerHTML = contact()
                    break;
                    case '/listing':
                      app.innerHTML = listing()
                      break;
     }
}