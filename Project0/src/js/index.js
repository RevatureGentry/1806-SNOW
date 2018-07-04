import MusicGenerator from "./generator/MusicGenerator";
import MusicLexer from "./lexer/MusicLexer";
import MusicTranslator from "./translator/MusicTranslator";
import * as start_events from "./index-utils/start-events";
import * as preview_events from "./index-utils/preview-events";
import * as arrow_events from "./index-utils/arrow-events";
import * as file_events from "./index-utils/file-events";

(function main() {
    const generator = new MusicGenerator(new MusicLexer(), new MusicTranslator());

    window.onload = function initUserInteractions(event) {
        console.log("Script running at load");

        arrow_events.addArrowEvents();
        preview_events.addPreviewEvents(generator);
        start_events.addStartEvents(generator);
        file_events.addFileEvents();
    };
})();