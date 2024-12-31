import React from "react";

const MarketingSection = () => {
  return (
    <>
      <div className="text-center py-8">
        <p className="font-serif text-lg italic text-gray-200">
          Psiu!<br />
          Está gostando da ferramenta? Esta é só uma amostra do que a{" "}
          <a 
            href="https://www.avelis.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Avelis
          </a>{" "}
          pode fazer por você! Venha conhecer inteligencia artificial mais avançada para médicos! GRATIS!
        </p>

        <div className="mt-8 text-gray-200 text-left">
          <p className="font-bold mb-2">Você também pode gostar:</p>
          <ul className="space-y-1">
            <li>
              <a 
                href="https://pdp.avelis.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Pedaço de Papel
              </a>
              {" "}- A forma mais facil e rapida de salvar e compartilhar textos.
            </li>
            <li>
              <a 
                href="https://casus.avelis.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Casus
              </a>
              {" "}- Discussão avançada de casos clínicos complexos usando IA.
            </li>
            <li>
              <a 
                href="https://www.avelis.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Avelis
              </a>
              {" "}- A mais avançada ferramenta de suporte a tomada de decisão e registro médico com IA.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MarketingSection;