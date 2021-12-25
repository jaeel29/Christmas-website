import Image from 'next/image';
import Link from 'next/link';
import IconComp from '../IconComponent';
import {
  PContainer,
  Header,
  SectionProducts,
  Card,
  Body,
  Button,
} from './Products.styled';

const ProductsSection = () => {
  return (
    <SectionProducts>
      <PContainer>
        <Header>
          <span>Products</span>
          <h2>ChrisMorocco chooses from 5,000+</h2>
        </Header>

        <Body>
          <Card>
            <div className='card-image'>
              <Image
                src='/Images/card-image.png'
                alt='Rudolph'
                width={1000}
                height={640}
              />
            </div>
            <div className='card-body'>
              <span className='tag'>Tag here</span>
              <p className='title'>Jaoanese Gyozas</p>
              <ul className='list-items'>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>650 calories</span>
                </li>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>NutriScore &reg; 74</span>
                </li>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>4.9 rating (537)</span>
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div className='card-image'>
              <Image
                src='/Images/card-image.png'
                alt='Rudolph'
                width={1000}
                height={640}
              />
            </div>
            <div className='card-body'>
              <span className='tag'>Tag here</span>
              <p className='title'>Jaoanese Gyozas</p>
              <ul className='list-items'>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>650 calories</span>
                </li>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>NutriScore &reg; 74</span>
                </li>
                <li className='item'>
                  <IconComp
                    color='#58C27D'
                    name='christmas-gift'
                    sizeIcon={24}
                  />
                  <span>4.9 rating (537)</span>
                </li>
              </ul>
            </div>
          </Card>
          <div className='list'>
            <h2>Works with aywahed:</h2>

            <ul>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 2</span>
              </li>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 3</span>
              </li>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 4</span>
              </li>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 5</span>
              </li>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 6</span>
              </li>
              <li>
                <IconComp color='#58C27D' name='check' sizeIcon={24} />
                <span>Pro 7</span>
              </li>
            </ul>
          </div>
        </Body>
        <Button>
          <div>
            <Link href='/' passHref>
              <>
                <span>See all offers</span>
                <IconComp color='#58C27D' name='arrow-right' sizeIcon={24} />
              </>
            </Link>
          </div>
        </Button>
      </PContainer>
    </SectionProducts>
  );
};

export default ProductsSection;
