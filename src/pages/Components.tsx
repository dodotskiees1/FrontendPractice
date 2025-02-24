
import Button from '../components/button';
import Card from '../components/card';
import CardImages from '../components/cardwithimage';
import Extra from '../components/extracard';
import Footer from '../components/footer';

const Components = () => {
  return (
    <div>
        <h1>This is Heading H1</h1>
      <h2>This is Heading H2</h2>
      <h3>This is Heading H3</h3>
      <h4>This is Heading H4</h4>
      <h5>This is Heading H5</h5>
      <h6>This is Heading H6</h6>
      <p>This is paragraph with DM Sans</p>
      <p>Big Regular (18/26)</p>
      <p>Big Strong(18/26)</p>
      <p>Base Regular (16/24)</p>
      <p>Base Strong(16/24)</p>
      <p>Small Regular(14/20)</p>
      <p>Small Strong(14/20)</p>
      <p>Caption Regular(12/auto)</p>
      <p>Caption Strong(12/auto)</p>
      <p>ALL CAPS</p>

      <Button size='sm' text='Small' />
      <Button size='lg' text='Large' />
     <Card />
     <div className='flex justify-center'>

     <CardImages size='small' text=''/>
     </div>

     <CardImages size='medium' text=''/>
     <div className='flex justify-center'>

     <CardImages size='large' text='' />
      <Extra  size='large' />
     </div>
     <Footer size='large'/>
    </div>
  )
}

export default Components
