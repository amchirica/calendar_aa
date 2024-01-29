// pages/index.js
import CalendarState from '@/context/CalendarContext'
import Header from '@/components/Header'
import Calendar from '@/components/Calendar'
import TaskForm from '@/components/TaskForm'

const Home = ({ logged }) => {
  console.log(logged);
  return (
    <div className="container">
      <CalendarState>
        <Header />
        <Calendar />
        <TaskForm/>
      </CalendarState>
      <a href="https://raianvisual.ro/" target="_blank"> Calendar </a>
    </div>
  )
}

export async function getInitialProps(ctx) {
  const { req: { cookies: { auth } = {} } = {} } = ctx;

  if (!auth) {
    // Tratează cazul în care autentificarea nu este validă
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      logged: true
    }
  };
}

export default Home;
