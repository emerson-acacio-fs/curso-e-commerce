import {Main} from '../components/Main';

export default function Home() {
  console.log(process.env.NODE_ENV);
  return <Main />;
}
