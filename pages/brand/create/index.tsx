import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BrandCreate from "../../../src/components/units/brand/create/BrandCreate.container";

export default function BrandCreatePage() {
	useAuth();
	return <BrandCreate isEdit={false} />;
}
