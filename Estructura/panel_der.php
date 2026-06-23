<section class="visualizer-panel">
            <div class="visualizer-toolbar">
                <span style="color: #2596be; font-weight: bold; margin-right: 10px;">Vista:</span>
                
                <?php 
                // array de los pdfs pa no escribir tanto label a mano
                $opciones_pdf = [
                    "Final.pdf" => "Completo",
                    "ETAPA_0.pdf" => "Etapa 0",
                    "live_etapa_1" => "<span style='color: #4169E1; font-weight: bold;'>Etapa 1</span>",
                    "ETAPA_2.pdf" => "Etapa 2",
                    "ETAPA_3.pdf" => "Etapa 3",
                    "ETAPA_4.pdf" => "Etapa 4"
                ];

                // Revisar cuando lo pasemos de xampp a docker edu
                $is_first = true;
                foreach($opciones_pdf as $val => $texto) { $chk = $is_first ? "checked" : "";
                    echo "<label><input type='radio' name='pdf_view' class='toggle-pdf' value='$val' $chk> $texto</label>\n";
                $is_first = false;
                }
                ?>
                </div>

            <div class="pdf-container" style="position: relative; height: 100%;">   
                <iframe id="main-pdf-viewer" class="pdf-frame" src="PDF_Separado/Final.pdf#view=FitH" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
 
              <div id="live-preview-container" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #525659; z-index: 10; overflow-y: auto;">
                    <?php @include 'Plantillas/previsualizador.php'; ?>
                </div>
            </div>
        </section>