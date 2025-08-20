import { calculateInvestmentResults, formatter } from "../util/investment";

export default function TableSummary({ input }) {
  const result = calculateInvestmentResults(input);
  // hint
  const totalInitialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
          {/* <td>
                    {props.year}
                </td>
                <td>
                    {props.valueEndOfYear}
                </td>
                <td>
                    {props.interest}
                </td>
                <td>
                    {props.totalInterest}
                </td>
                <td>
                    {props.annualInvestment}
                </td> */}
          {result.map((item, index) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              totalInitialInvestment;
            const totalAmount = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
