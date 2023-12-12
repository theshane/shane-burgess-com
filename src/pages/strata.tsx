import Layout from "src/components/Layout";
import { strata } from "src/assets/data";
import CompanyComponent from "src/components/Company";

export default function Home() {
  return (
    <Layout>
      <CompanyComponent company={strata} />
    </Layout>
  );
}
