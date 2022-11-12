import PropTypes from "prop-types";

function Header({text, subText, bgColor, textColor, subTextColor}) {
  
    const headerStyles = {
        color: textColor,
    }
    const subtitleStyles = {
        color: subTextColor,
    }
  
    return (
    <header >
      <section class="elementor-section elementor-top-section elementor-element elementor-element-a6dba6d elementor-section-content-middle elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a6dba6d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e38265" data-id="5e38265" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-element elementor-element-5b22fd4 elementor-widget elementor-widget-heading" data-id="5b22fd4" data-element_type="widget" id="eligetubootcamp" data-widget_type="heading.default">
                        <div class="elementor-widget-container">
                            <h2 style = {headerStyles} class="elementor-heading-title elementor-size-default">{text}</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-a1a98ac elementor-widget elementor-widget-heading" data-id="a1a98ac" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			            <p style = {subtitleStyles} class="elementor-heading-title elementor-size-default"></p>{subText}</div>
				        </div>
					</div>
		        </div>
		    </div>
		</section>
    </header>
  )
}
Header.defaultProps = {
    text: 'Elige tu Bootcamp',
    textColor: '#27a5b2',
    subText: 'Contamos con programas que combinan clases prácticas dictadas por expertos.',   
    subTextColor: '#666666'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header