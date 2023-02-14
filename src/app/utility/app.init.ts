import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://keycloak.szut.dev/auth',
          realm: 'szut',
          clientId: 'lf10_starter_project-frontend'
        },
        initOptions: {
          checkLoginIframe: true,
          checkLoginIframeInterval: 25,
        }
      });
  }