import CalendarState from '@/context/CalendarContext'
import Header from '@/components/Header'
import Calendar from '@/components/Calendar'
import TaskForm from '@/components/TaskForm'

const Home = ({logged}) => {
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

export async function getServerSideProps(ctx) {
  const { req, req: { cookies: { auth } } } = ctx
  const { res: { writeHead: redirect } } = ctx

  console.log(ctx.req.cookies.auth,"Salut!");

  if(!auth) {
      redirect(301, {
          Location: "/login"
        });
    ctx.res.end();
  }


  
  return {
      props: {
          logged: true
      }
  }
  
}

export default Home;