import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT SET US APART?" >
  We will be having monthly raffles that will generate cash flow for holders of our nft. Artist and influencer platform where paying Web3 employees will become safe and secure in our new platform coming in phase 2.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY BUY A RAFFLE TICKET?" >
  When buying a raffle ticket it not only gets you your spot in a chance to win a degod, but it also grants you access to our whole ecosystem including, SocietyDAO, Alpha callouts, Weekly and monthly drops, clothing brand, and our artist and inlfuencer platoform that will be released in phase 2.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY HOLD OUR NFTS?" >
  We believe in solana for the longterm, if we can get our dao's treasury bought into such a good solana price, then in the coming years we will have the funds to build off of the price that we have right now. Our platforms will also be a holding factor as you can win weekly and monthly prizes.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="WHY JOIN US?" >
As we see solana drop to all time lows, it's very important that we all invest in the right things as it could set up the futures of all of us. We want to price our tickets at $7 dollars per ticket(Includes our nft), to make it very cost efficent for everyone to get part in our ecosystem and also have a chance at owning a life changing nft that everyone dreams about.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT YOU NEED TO KNOW ABOUT US?
" >
We are a team of builders, that have great love for the solana nft ecosystem, we feel solana has the best community and utility aspects to build a successful project and business. We are here to stay and make an impact on how things are ran in the ecosystem, while also trying to fix what is wrong. We have all been wary of scamming in web3 as it comes more and more prevelant. We believe there is a solution to what is so broken in our ecosystem, so come along on the journey to create safe transactions.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="ABOUT THE DEGODS RAFFLE?
" >
All you have to do to join in on our Degods raffle is mint our nft and that will grant you your spot in a chance to win. This nft will be eligible to sell on magic eden marketplace, you can chose to sell or hold. 
Just know we warned you about the future and what we have in store.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq