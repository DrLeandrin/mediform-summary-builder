import React from "react";

const PageHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="https://www.avelis.com.br/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://app.avelis.com.br/logo-transparente.svg" 
            alt="Avelis Logo" 
            className="h-12"
          />
        </a>
        <h1 className="text-2xl font-bold text-center">
          Monta Evolução - Avelis.com.br
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;