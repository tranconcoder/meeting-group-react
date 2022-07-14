import InformationLayout from '../../components/Layouts/Information/InformationLayout';
import Profile from '../../components/Profile';

function ProfilePage() {
	return (
		// <NeedAuth>
		<InformationLayout ContentBoard={Profile} />
		// </NeedAuth>
	);
}

export default ProfilePage;
