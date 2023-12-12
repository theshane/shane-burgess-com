import Layout from "src/components/Layout";
import { gm } from "src/assets/data";
import CompanyComponent from "src/components/Company";

export default function Home() {
  return (
    <Layout>
      <CompanyComponent company={gm} />
    </Layout>
  );
}
