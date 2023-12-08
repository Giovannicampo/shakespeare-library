import { ReactElement, Fragment } from "react";
import { rows } from "./BooksData";
import { PieChart } from '@mui/x-charts';
import Title from "../Title";

const listGenres = [
  { id: 0, value: 0, label: "Thriller" },
  { id: 1, value: 0, label: "Narrativa" },
  { id: 2, value: 0, label: "Sci-Fi" },
  { id: 3, value: 0, label: "Saggistica" },
  { id: 4, value: 0, label: "Fantasy" }
];

function updateList(): void {
  listGenres.forEach((g) =>
    rows.filter((r) => r.genre === g.label).forEach(() => g.value++),
  );
}

updateList();

export default function BooksChart(): ReactElement {
  return (
    <Fragment>
    <Title>Pie chart of genres</Title>
      <PieChart
        series={[
          {
            data: listGenres,
          },
        ]}
        width={400}
        height={200}
      />
    </Fragment>
  );
}
