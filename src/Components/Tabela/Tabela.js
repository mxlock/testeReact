import React from 'react';

const Tabela = ({ tableContent }) => {
  const [tableData, setTableData] = React.useState();

  React.useEffect(() => {
    const apiSME = async () => {
      const response = await fetch(
        `https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${tableContent}`,
      );
      const json = await response.json();
      setTableData(json);
    };

    apiSME();
  }, [tableContent]);

  return (
    <div className="table">
      <table className="tableTH">
        <thead>
          <tr>
            <th>{'DRE'}</th>
            <th>{'TIPO ESCOLA'}</th>
            <th>{'FAIXA'}</th>
            <th>{'QTD'}</th>
          </tr>
        </thead>
        {tableData?.results.map((content, index) => (
          <thead key={index}>
            <tr className="tableTD">
              <td>{content.dre}</td>
              <td>{content.tipoesc}</td>
              <td>{content.faixa}</td>
              <td>{content.count}</td>
            </tr>
          </thead>
        ))}
      </table>
    </div>
  );
};

export default Tabela;
