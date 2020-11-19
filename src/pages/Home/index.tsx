import React from 'react';
import { FiHeart } from 'react-icons/fi';

import Header from '../../components/Header';
import Section from '../../components/Section';

import oqueSaoImg from '../../assets/oque-sao.jpg';
import comoDesenvolverImg from '../../assets/como-desenvolver.jpg';
import porqueDesenvolverImg from '../../assets/porque-desenvolver.jpg';
import pensamentoCriticoImg from '../../assets/pensamento-critico.jpg';
import expansionWeekImg from '../../assets/expansion-week.png';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Section
          title="O que são soft skills?"
          background_color="#333238"
          background_url={oqueSaoImg}
        >
          <div className="background" />
          <div className="content" style={{ marginLeft: 32 }}>
            <strong>Competências Comportamentais</strong>
            <p>
              Soft skills são competências comportamentais, ou seja, atributos
              pessoais que você precisa ter para ser bem-sucedido no local de
              trabalho. Em geral as soft skills estão relacionadas à sua
              capacidade de interagir com outras pessoas no local de trabalho.
              Elas também incluem a capacidade que você tem de trabalhar sob
              pressão e se adaptar a novas situações.
            </p>
            <strong>Inteligência Emocional</strong>
            <p>
              Se houvesse um termo base para sustentar de forma mais
              simplificada tudo o que elas representam esse termo seria
              inteligência emocional. Essas habilidades são intrínsecas à
              personalidade, sejam elas inatas ou desenvolvidas ao longo do
              tempo. São habilidades comportamentais, mentais, emocionais e
              sociais.
            </p>
          </div>
        </Section>
        <Section
          title="Como desenvolver soft skills?"
          background_color="#3D3C42"
          background_url={comoDesenvolverImg}
        >
          <div className="content" style={{ marginRight: 32 }}>
            <strong>Auto Conhecimento</strong>
            <p>
              Como as soft skills não são técnicas, elas dificilmente serão
              aprendidas apenas em sala de aula. Para desenvolvê-las, você
              precisa primeiramente se conhecer bem, saber quais são seus pontos
              fortes e também os pontos que precisa desenvolver para evoluir na
              carreira.
            </p>
            <p>
              E indispensável que se trabalhe o autoconhecimento. Habilidades
              inatas, quando não utilizadas a favor do indivíduo, constituem em
              talento desperdiçado.
            </p>
            <p>
              Por meio do autoconhecimento, é possível descobrir os pontos
              fortes, aprimorá-los, e revelar as características mais críticas,
              que precisam ser trabalhadas pela pessoa.
            </p>
            <strong>Emoções</strong>
            <p>
              Conseguir administrar as próprias emoções é a melhor maneira de
              diminuir o estresse e manter o foco. Realizar atividades
              terapêuticas ou meditação, além de ajudar a manter o equilíbrio,
              também auxilia muito nesse processo de autoconhecimento.
            </p>
          </div>
          <div className="background" />
        </Section>
        <Section
          title="Porque desenvolver soft skills?"
          background_color="#56555E"
          background_url={porqueDesenvolverImg}
        >
          <div className="background" />
          <div className="content" style={{ marginLeft: 32 }}>
            <strong>Processo Seletivo</strong>
            <p>
              Em um mercado de trabalho que se torna cada vez mais competitivo,
              bons currículos e qualificações não são mais suficientes para
              conquistar a vaga desejada.
            </p>
            <p>
              Até pouco tempo atrás, os processos seletivos fundamentavam-se
              quase que exclusivamente na avaliação das chamadas hard skills ou
              competências técnicas que podem ser adquiridas em capacitações e
              acrescentadas ao currículo.
            </p>
            <strong>Habilidades Sociais e Comportamentais</strong>
            <p>
              Segundo estudo do site de recrutamento CareerBuilder, 77% das
              empresas acreditam que as habilidades sociais são tão importantes
              quanto as técnicas no dia a dia de trabalho.
            </p>
            <p>
              A consciência das emoções e o desenvolvimento das chamadas
              competências comportamentais são fatores essenciais para o sucesso
              do indivíduo. Por outro lado, a incapacidade de gerenciar as
              próprias emoções pode prejudicar gravemente a performance
              profissional e o desempenho corporativo.
            </p>
          </div>
        </Section>
        <Section
          title="Pensamento Crítico"
          background_color="#6F6D78"
          background_url={pensamentoCriticoImg}
        >
          <div className="content" style={{ marginRight: 32 }}>
            <strong>A mais importante</strong>
            <p>
              Existem muitas vantagens estratégicas em contratar pessoas que
              tenham soft skills desenvolvidas. Para que a equipe entregue os
              resultados esperados, um bom relacionamento entre os colegas é
              essencial. É aí que entram, por exemplo, as habilidades de
              comunicação e trabalho em equipe. Se os profissionais do time
              tiverem essas competências, fica fácil estabelecer um dia a dia
              produtivo e harmonioso. Porem a soft skill que considero mais
              importante é o pensamento crítico.
            </p>

            <strong>Olhar de fora</strong>
            <p>
              Um pensamento crítico exige que, primordialmente, você consiga
              afastar crenças pessoais para analisar um problema ou questão.
              Comumente, ele é conhecido como aquela característica de quem
              consegue enxergar algo como se estivesse vendo “de fora”.
            </p>
            <p>
              Falando de maneira simplória, trata-se de deixar emoções de lado e
              focar no que é racional.
            </p>
            <strong>Super poderes</strong>
            <p>
              Pensar de maneira crítica também envolve ser criativo e inovador.
              Logo, essa única atitude tem um impacto enorme em todo o seu
              trabalho, afinal, o torna um solucionador de problemas e também um
              fornecedor de ideias inovadoras.
            </p>
          </div>
          <div className="background" />
        </Section>
        <footer>
          <img src={expansionWeekImg} alt="" />
          <h5>
            Made with
            <FiHeart size={16} />
          </h5>
        </footer>
      </Container>
    </>
  );
};

export default Home;
