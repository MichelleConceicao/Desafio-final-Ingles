import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>
          {" "}
          R: O verbo to have age como verbo principal e tambem como função de
          auxiliar. O verbo to have é auxiliar nos tempos perfeitos: past
          perfect, present perfect, future perfect e os progressivos perfeitos
          também.{" "}
        </p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <p>
          {" "}
          R: Have tem o sentido de “ter”, “possuir”. Consequentemente, ele
          indica posse.
        </p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <p> R: There was sadness in her voice.</p>
        <p> R: His closing years were full of sadness.</p>
        <p> R: I want to weep for joy.</p>
        <p>
          {" "}
          R: He also wants to learn the violin which does not fill us with joy
        </p>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
        <p>
          {" "}
          R: GOING TO é normalmente usada para indicar o futuro, mas com algum
          tipo de conexão com o presente já no WILL não há conexão implícita ou
          explícita com o presente,
        </p>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p> R: Used interrogative pronouns are who, whose, what and which.</p>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <p>
          {" "}
          R: There are six main types of adverbs namely adverbs of manner,
          adverbs of time, adverbs of place, adverbs of frequency, adverbs of
          degree and conjunctive adverbs.
        </p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p> R: I will call you later.</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p> R: Different air night did are read asked</p>
      </S.Box>
    </S.Container>
  );
}
