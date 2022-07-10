import InformationLayout from '../../components/Layouts/Information/InformationLayout';
import NeedAuth from '../../components/NeedAuth';
import Profile from '../../components/Profile';

function ProfilePage() {
	return (
		// <NeedAuth>
		<InformationLayout ContentBoard={Profile} />
		// </NeedAuth>
	);
}

export default ProfilePage;
