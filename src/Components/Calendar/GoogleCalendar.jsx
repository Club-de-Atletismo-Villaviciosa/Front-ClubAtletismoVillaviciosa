import React, { useEffect } from 'react';
import moment from 'moment';
import { gapi } from 'gapi-script';

const GoogleCalendar = () => {
    
  useEffect(() => {
    const handleClientLoad = () => {
      window.gapi.load('client:auth2', initClient);
    };

    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyDn_KW0Z8ohNVU8P6fmVnbnqAopI649ly4',
          clientId: '492578824882-7q9s75oqaqrg3etv1t2gp98cs87ppvqc.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar.readonly',
        })
        .then(() => {
          window.gapi.auth2.getAuthInstance().signIn();
        });
    };

    const getCalendarEvents = () => {
      window.gapi.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: moment().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        })
        .then((response) => {
          const events = response.result.items;
          // Haz algo con los eventos obtenidos, como almacenarlos en el estado del componente o mostrarlos en la interfaz.
        });
    };

    handleClientLoad();
    getCalendarEvents();
  }, []);

  return (
    <div>
      {/* Renderiza los eventos de Google Calendar aquí */}
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMadrid&src=Y2Euc3BhaW4ub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hNmM1MjNkZGU3ZDYxNDdlMTQ2NjBjZThhYzYxNGMwYjc5YjcxZjM4NTM2OGEzMTE3YThjZTUwODQ0YmRiOTZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043&color=%23F4511E" 
      style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  );
};

export default GoogleCalendar;
