import notificação from '../../assets/img/notification--icon.svg'
import './style.css'

function notificationbutton() {
	return (
		<div className="dsmeta-red-btn">
			<img src={notificação} alt="Notificar" />
		</div>
	)
}

export default notificationbutton
