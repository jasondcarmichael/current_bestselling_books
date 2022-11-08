import { CCollapse } from '@coreui/bootstrap-react'
// import CCollapse from '@coreui/bootstrap-react/src/components/collapse/CCollapse'

export default function Collapse () {

const [visible, setVisible] = useState(false)

return (
    <>
        <CButton className="collapse" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">Button</CButton>
        <div style={{ minHeight: '120px'}}>
            <CCollapse id="collapseWidthExample" horizontal visible={visible}>
                <CCard style={{width: '300px'}}>
                    <CCardBody>
                    Yada yada yada hozizontal collapse
                    </CCardBody>
                </CCard>
            </CCollapse>
        </div>
    </>
)
}