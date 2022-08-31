import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <p>R: Hyper Text Transfer Protocol Secure.</p>
        <S.H2>Stateless is...?</S.H2>
        <p>
          R: E o processo de requisição-resposta entre o Servidor o Protocolo e
          o usuario sem que alguma informção seja salva no final da conexão.
        </p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <p>
          R: Modal Verbs. Could = possibilidade, Shold = desejos, conselhos,
          sugestões e Would = hipótese, pedidos mais formais.
        </p>
        <S.H2>What Should means?</S.H2>
        <p>
          R: Should é um verbo auxiliar, usamos should principalmente para dar
          conselhos ou fazer recomendações ou falar sobre obrigação.
        </p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <li> R: - We will speak very highly of you!</li>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <li> R: - He goes to Bahia next month</li>
          <li>3 - Ela estará ai amanhã</li>
          <li> R: - she will be ouch tomorrow.</li>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <> R: They</>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <>
          <ol>
            <li>I /was /was not</li>
            <li>You /were /were not</li>
            <li>He /was /was not</li>
            <li>She /was /was not</li>
            <li>It /was /was not</li>
            <li>We /were /were not</li>
            <li>You /were /were not</li>
            <li>They /were /were not</li>
          </ol>
        </>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <p> R: These are my friends, Dandara and Rosane.</p>
        <p> R: These or those?</p>
      </S.Box>
    </S.Container>
  );
}
