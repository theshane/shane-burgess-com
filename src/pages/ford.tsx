import Layout from "src/components/Layout";
import { fordCredit } from "src/assets/data";
import CompanyComponent from "src/components/Company";

export default function Home() {
  return (
    <Layout>
      <CompanyComponent company={fordCredit} />
    </Layout>
  );
}
